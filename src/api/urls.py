from django.urls import path, include
from .views import ProgramsList, ProgramDetail, ExerciseDetail, ExercisesList, LessonDetail, LessonsList, UserProfilesList, UserProfileDetail, CreateUser, UpdateUserProfile

urlpatterns = [
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('users/', CreateUser.as_view()),
    path('programs/', ProgramsList.as_view()),
    path('programs/<int:pk>', ProgramDetail.as_view()),
    path('lessons/', LessonsList.as_view(), name="lessons"),
    path('lessons/<int:pk>', LessonDetail.as_view(), name="lesson"),
    path('exercises/', ExercisesList.as_view(), name="exercises"),
    path('exercises/<int:pk>', ExerciseDetail.as_view(), name="exercise"),
    path('profiles/', UserProfilesList.as_view(), name="user_profiles"),
    path('profiles/<int:pk>', UserProfileDetail.as_view(), name="user_profile"),
    path('profile/', UpdateUserProfile.as_view(), name="user_profile"),
]

