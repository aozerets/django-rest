from django.contrib.auth.models import User
from django.db import models


class UserProfile(models.Model):
    USER_STATUS = (
        ("admin", "admin"),
        ("teacher", "teacher"),
        ("student", "student")
    )
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    status = models.CharField(max_length=10, choices=USER_STATUS, default='student')
    name = models.CharField(max_length=20, blank=True, null=True)
    surname = models.CharField(max_length=20, blank=True, null=True)
    country = models.CharField(max_length=20, blank=True, null=True)
    city = models.CharField(max_length=20, blank=True, null=True)
    phone = models.CharField(max_length=11, blank=True, null=True)
    company = models.CharField(max_length=50, blank=True, null=True)
    position = models.CharField(max_length=20, blank=True, null=True)
    birth_date = models.DateField(blank=True, null=True)
    user_avatar = models.ImageField(blank=True, null=True)

    def __str__(self):
        return self.user.username