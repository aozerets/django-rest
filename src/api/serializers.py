from rest_framework import serializers
from programs.models import Program, Lesson, Exercise
from main.models import UserProfile
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("username", "email")


class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    student_programs = serializers.StringRelatedField(many=True)
    teacher_programs = serializers.StringRelatedField(many=True)

    class Meta:
        model = UserProfile
        fields = '__all__'


class ProgramSerializer(serializers.ModelSerializer):
    lessons = serializers.StringRelatedField(many=True)

    class Meta:
        model = Program
        fields = '__all__'


class LessonSerializer(serializers.ModelSerializer):
    exercise = serializers.StringRelatedField()
    program = serializers.StringRelatedField()

    class Meta:
        model = Lesson
        fields = '__all__'


class ExerciseSerializer(serializers.ModelSerializer):
    assigned = UserProfileSerializer(many=True)
    verifier = serializers.StringRelatedField()#UserProfileSerializer()
    lesson = LessonSerializer()

    class Meta:
        model = Exercise
        fields = '__all__'

