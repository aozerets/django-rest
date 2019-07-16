import requests
from django.contrib import admin
from django.db.models import Prefetch
from main.models import UserProfile
from .tasks import update_currency
from .models import Program, Exercise, Lesson, CurrencyRate


class ProgramAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'start', 'get_student_str', 'get_teacher_str')

    def get_queryset(self, request):
        qs = super().get_queryset(request)
        prefetch_qs = UserProfile.objects.only('user').select_related('user')
        prefetch1 = Prefetch('students', queryset=prefetch_qs)
        prefetch2 = Prefetch('teachers', queryset=prefetch_qs)
        qs = qs.prefetch_related(prefetch1).prefetch_related(prefetch2)
        return qs

    def get_student_str(self, obj):
        return ", ".join([u.user.username for u in obj.students.all()])
    get_student_str.short_description = 'Students'

    def get_teacher_str(self, obj):
        return ", ".join([u.user.username for u in obj.teachers.all()])
    get_student_str.short_description = 'Teachers'


class CurrencyRateAdmin(admin.ModelAdmin):

    actions = ["update_currency_rates",]

    def update_currency_rates(self, request, queryset):
        for rate in queryset:
            pair = "{}RUB".format(rate.currency.upper())
            response = requests.get(
                "https://www.freeforexapi.com/api/live?pairs={}".format(pair)
            )
            data = response.json()

            rate.rate = data['rates'][pair]['rate']
            rate.save(update_fields=['rate'])

        update_currency.delay()


admin.site.register(CurrencyRate, CurrencyRateAdmin)
admin.site.register(Program, ProgramAdmin)
admin.site.register(Exercise)
admin.site.register(Lesson)

