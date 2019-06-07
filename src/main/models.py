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

    def __str__(self):
        return self.user.username