from django.contrib import admin
from .models import Program, Exercise, Lesson, Studentship

admin.site.register(Program)
admin.site.register(Exercise)
admin.site.register(Lesson)


@admin.register(Studentship)
class StudentshipAdmin(admin.ModelAdmin):
    list_display = 'id', 'user_profile', 'program'
