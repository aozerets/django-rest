from django.urls import path
from .views import Main, SignUp, UserProfilesList, UserProfileDetail

urlpatterns = [
    path('signup/', SignUp.as_view(), name='signup'),
    path('profiles/', UserProfilesList.as_view(), name="user_profiles"),
    path('profiles/<int:pk>', UserProfileDetail.as_view(), name="user_profile"),
    path('<page>', Main.as_view(), name="main-courses")
]

