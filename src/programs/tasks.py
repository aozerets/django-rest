import requests
from celery import shared_task
from django.contrib.auth.models import User
from .models import CurrencyRate, Lesson, Program
from main.tasks import send_mail
from django.utils import timezone
from datetime import timedelta


@shared_task
def update_currency():
    currency = CurrencyRate.objects.get(currency='usd')
    response = requests.get('https://www.freeforexapi.com/api/live?pairs=USDRUB')
    data = response.json()

    currency.rate = data['rates']['USDRUB']['rate']
    currency.save(update_fields=['rate'])


@shared_task
def find_nearest_lesson():
    lessons = Lesson.objects.filter(day__range=(timezone.now(), timezone.now() + timedelta(hours=1)))
    for les in lessons:
        prog = Program.objects.get(id=les.program_id)
        studs = prog.students.all()
        for s in studs:
            email = User.objects.get(id=s.user_id).email
            send_mail.delay(email, les.name, prog.title)
        pass
    pass
