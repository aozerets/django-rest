from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Program, Lesson, Exercise, UserProfile


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("username", "email")


class ProgramSerializer(serializers.ModelSerializer):

    class Meta:
        model = Program
        fields = '__all__'


class LessonSerializer(serializers.ModelSerializer):
    program = ProgramSerializer()

    class Meta:
        model = Lesson
        fields = '__all__'


class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    programs = ProgramSerializer(many=True)

    class Meta:
        model = UserProfile
        fields = '__all__'


class ExerciseSerializer(serializers.ModelSerializer):
    # lesson = LessonSerializer()
    # assigned = UserProfileSerializer(many=True)
    # verifier = UserProfileSerializer()
    lesson = serializers.StringRelatedField()
    assigned = serializers.StringRelatedField(many=True)
    verifier = serializers.StringRelatedField()

    class Meta:
        model = Exercise
        fields = '__all__'

