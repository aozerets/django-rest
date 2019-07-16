from __future__ import absolute_import, unicode_literals
import os
from celery import Celery
from django.conf import settings

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'courses.settings')

app = Celery('courses')
app.config_from_object('django.conf:settings')
app.autodiscover_tasks(lambda: settings.INSTALLED_APPS)


@app.task(bind=True)
def debug_task(self):
    print('Request: {0!r}'.format(self.request))


"""This can be set in django admin in Periodic Tasks"""
# app.conf.beat_schedule = {
#     "see-you-in-ten-seconds-task": {
#         "task": "programs.tasks.update_currency",
#         "schedule": 30.0
#     },
#     "sending_nearest_lesson_mail": {
#         "task": "programs.tasks.find_nearest_lesson",
#         "schedule": 3600.0
#     }
# }
