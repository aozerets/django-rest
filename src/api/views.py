from rest_framework.decorators import api_view
from rest_framework.exceptions import ValidationError
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, CreateAPIView, ListAPIView, \
    get_object_or_404
from django.contrib.auth.models import User
from programs.models import Program, Lesson, Exercise
from main.models import UserProfile
from rest_framework.permissions import AllowAny, IsAdminUser
from rest_framework.response import Response
from json import dumps

from .serializers import ProgramSerializer, LessonSerializer, ExerciseSerializer, UserProfileSerializer, CreateUserSerializer


class CreateUser(CreateAPIView):
    permission_classes = (AllowAny,)
    serializer_class = CreateUserSerializer
    queryset = User.objects.all()


class UserProfilesList(ListCreateAPIView):
    permission_classes = (IsAdminUser,)
    serializer_class = UserProfileSerializer
    queryset = UserProfile.objects.all()


class UserProfileDetail(RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAdminUser,)
    serializer_class = UserProfileSerializer
    queryset = UserProfile.objects.all()


class UpdateUserProfile(RetrieveUpdateDestroyAPIView):
    def get(self, request, *args, **kwargs):
        profile = UserProfile.objects.get_or_create(user=request.user)
        result = UserProfileSerializer(profile[0]).data
        return Response(result)

    def put(self, request, *args, **kwargs):
        if not request.user.is_authenticated:
            return Response({})
        else:
            print(request.data)
            profile = UserProfile.objects.get(user=request.user)
            profile.name = request.data.get("name")
            profile.surname = request.data.get("surname")
            profile.country = request.data.get("country")
            profile.city = request.data.get("city")
            profile.phone = request.data.get("phone")
            profile.company = request.data.get("company")
            profile.position = request.data.get("position")
            profile.birth_date = request.data.get("birth_date")
            avatar = request.data.get("user_avatar")
            print(avatar)
            if avatar:
                main, sub = avatar.content_type.split('/')
                if not (main == 'image' and sub in ['jpeg', 'pjpeg', 'gif', 'png']):
                    raise ValidationError('Please use a JPEG, GIF or PNG image.')
                if len(avatar) > (30 * 1024):
                    raise ValidationError('Avatar file size may not exceed 30k.')
                profile.user_avatar = avatar
            profile.save()
            return Response({'success': True})


class ProgramsList(ListCreateAPIView):
    serializer_class = ProgramSerializer
    queryset = Program.objects.all()


class ProgramDetail(RetrieveUpdateDestroyAPIView):
    serializer_class = ProgramSerializer
    queryset = Program.objects.all()

    def get(self, request, *args, **kwargs):
        # profile = UserProfile.objects.get_or_create(user=request.user)
        # result = UserProfileSerializer(profile[0]).data
        # return Response(result)
        #queryset = self.filter_queryset(self.get_queryset())
        # print(queryset)
        #queryset = self.get_queryset()
        #print(self.queryset)
        result = self.serializer_class(get_object_or_404(self.queryset, pk=kwargs['pk']))
        #print('-'*40)
        #print(result)
        # stu = list(result['students'])
        # print(stu)
        # [i['user'].add({"done": "13/25"}) for i in stu]
        # print(stu)
        # result['students'] = stu
        #add your constant here
        # final_response = serializer._data.copy()
        # final_response["DISCOUNT"] = 210
        return Response(result.data)


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
