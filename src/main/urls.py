from django.urls import path
from .views import Main, SignUp

urlpatterns = [
    path('signup/', SignUp.as_view(), name='signup'),
    path('<page>', Main.as_view(), name="main-courses")
]

