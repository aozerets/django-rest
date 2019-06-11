from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from programs.models import Program, Lesson, Exercise
from main.models import UserProfile
from .serializers import ProgramSerializer, LessonSerializer, ExerciseSerializer, UserProfileSerializer


class UserProfilesList(ListCreateAPIView):
    serializer_class = UserProfileSerializer
    queryset = UserProfile.objects.all()


class UserProfileDetail(RetrieveUpdateDestroyAPIView):
    serializer_class = UserProfileSerializer
    queryset = UserProfile.objects.all()


class ProgramsList(ListCreateAPIView):
    serializer_class = ProgramSerializer
    queryset = Program.objects.all()


class ProgramDetail(RetrieveUpdateDestroyAPIView):
    serializer_class = ProgramSerializer
    queryset = Program.objects.all()


class LessonsList(ListCreateAPIView):
    serializer_class = LessonSerializer
    queryset = Lesson.objects.all()


class LessonDetail(RetrieveUpdateDestroyAPIView):
    serializer_class = LessonSerializer
    queryset = Lesson.objects.all()


class ExercisesList(ListCreateAPIView):
    serializer_class = ExerciseSerializer
    queryset = Exercise.objects.all()


class ExerciseDetail(RetrieveUpdateDestroyAPIView):
    serializer_class = ExerciseSerializer
    queryset = Exercise.objects.all()

