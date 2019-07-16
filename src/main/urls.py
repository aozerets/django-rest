from django.urls import path
from .views import Main, SignUp, send_mail_once

urlpatterns = [
    path('', Main.as_view()),
    path('signup/', SignUp.as_view(), name='signup'),
    path('sendmail/', send_mail_once, name='sendmail'),
    path('*', Main.as_view()),
]

