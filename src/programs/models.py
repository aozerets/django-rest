from django.contrib.auth.models import User
from django.db import models


class Program(models.Model):
    title = models.CharField(max_length=30)
    start = models.DateTimeField()

    def __str__(self):
        return self.title


class UserProfile(models.Model):
    USER_STATUS = (
        ("admin", "admin"),
        ("teacher", "teacher"),
        ("student", "student")
    )
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    programs = models.ManyToManyField(Program, blank=True)
    status = models.CharField(max_length=10, choices=USER_STATUS)

    def __str__(self):
        return self.user.username


class Lesson(models.Model):
    name = models.CharField(max_length=30)
    program = models.ForeignKey(Program, on_delete=models.CASCADE)
    day = models.DateField(blank=True)

    def __str__(self):
        return self.name


class Exercise(models.Model):
    EX_STATUS = (
        ("done", 'done'),
        ("not done", 'not done'),
        ("check", 'checking'),
        ("new", 'new'),
    )
    name = models.CharField(max_length=30)
    status = models.CharField(max_length=10, choices=EX_STATUS)
    lesson = models.OneToOneField(Lesson, on_delete=models.CASCADE, blank=True, null=True)
    assigned = models.ManyToManyField(UserProfile, related_name='assigned', blank=True)
    verifier = models.ForeignKey(UserProfile, related_name='verifier', blank=True, null=True, on_delete=models.SET_NULL)

    def __str__(self):
        return self.name
