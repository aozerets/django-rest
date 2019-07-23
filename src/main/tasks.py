from django.core.mail import EmailMultiAlternatives
from courses.celery import app


@app.task(max_retries=3)
def send_mail(subject, client, text_content=None, html_content=None):
    try:
        from_mail = 'server@gmail.com' #this can be set in settings
        msg = EmailMultiAlternatives(subject, text_content, from_mail, [client])
        msg.attach_alternative(html_content, "text/html")
        out = msg.send()
        if out != 1:
            raise Exception
    except Exception as e:
        num_retries = send_mail.request.retries
        seconds_to_wait = 3.0 ** num_retries
        raise send_mail.retry(countdown=seconds_to_wait)
