from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Program, Lesson, Exercise


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("username", "email")


class ProgramSerializer(serializers.ModelSerializer):

    class Meta:
        model = Program
        fields = '__all__'


class LessonSerializer(serializers.ModelSerializer):

    class Meta:
        model = Lesson
        fields = '__all__'


class ExerciseSerializer(serializers.ModelSerializer):
    # lesson = serializers.StringRelatedField()
    # assigned = serializers.StringRelatedField(many=True)
    # verifier = serializers.StringRelatedField()

    class Meta:
        model = Exercise
        fields = '__all__'

