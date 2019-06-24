from django.urls import path
from .views import Main, SignUp

urlpatterns = [
    path('', Main.as_view()),
    path('signup/', SignUp.as_view(), name='signup'),
    path('*', Main.as_view()),
]

