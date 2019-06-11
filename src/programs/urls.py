from django.urls import path
from .views import Programs, sign_on_course, DetailProgram

urlpatterns = [
    path('', Programs.as_view(), name="programs"),
    path('<int:pk>/', DetailProgram.as_view(), name="program"),
    path('signoncourse/', sign_on_course, name="sign_on_course"),
]
