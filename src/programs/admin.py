from django.contrib import admin
from .models import Program, UserProfile, Exercise, Lesson

admin.site.register(Program)
admin.site.register(UserProfile)
admin.site.register(Exercise)
admin.site.register(Lesson)
