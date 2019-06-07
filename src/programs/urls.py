from django.urls import path
from .views import ProgramsList, ProgramDetail, ExerciseDetail, ExercisesList, LessonDetail, LessonsList

urlpatterns = [
    path('programs/', ProgramsList.as_view(), name="programs"),
    path('programs/<int:pk>', ProgramDetail.as_view(), name="program"),
    path('lessons/', LessonsList.as_view(), name="lessons"),
    path('lessons/<int:pk>', LessonDetail.as_view(), name="lesson"),
    path('exercises/', ExercisesList.as_view(), name="exercises"),
    path('exercises/<int:pk>', ExerciseDetail.as_view(), name="exercise"),
]

