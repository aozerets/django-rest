from rest_framework import serializers
from programs.models import Program, Lesson, Exercise
from main.models import UserProfile
from django.contrib.auth.models import User


class CreateUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ("username", "password", "email")
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User(
            email=validated_data['email'],
            username=validated_data['username']
        )
        user.set_password(validated_data['password'])
        user.save()
        user_profile = UserProfile(user=user)
        user_profile.save()
        return user


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("username", "email")


class ShortExerciseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Exercise
        fields = ['id', 'status']


class ShortUserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    #exercises = ShortExerciseSerializer(many=True)#serializers.StringRelatedField(many=True)
    done_count = serializers.SerializerMethodField()

    def get_done_count(self, obj):
        return str(obj.exercises.filter(status='done').count()) + '/' + str(obj.exercises.count())

    class Meta:
        model = UserProfile
        depth = 1
        fields = ['id', 'user', 'done_count']


class ProgramSerializer(serializers.ModelSerializer):
    lessons = serializers.StringRelatedField(many=True)
    students = ShortUserProfileSerializer(many=True)

    class Meta:
        model = Program
        fields = '__all__'


class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    student_programs = serializers.StringRelatedField(many=True)
    teacher_programs = ProgramSerializer(many=True)#serializers.PrimaryKeyRelatedField(queryset=Program.objects.all(), many=True)

    class Meta:
        model = UserProfile
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
