import requests
from django.contrib import admin
from django.db.models import Prefetch
from main.models import UserProfile
from .tasks import update_currency
from .models import Program, Exercise, Lesson, CurrencyRate


class ProgramAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'start', 'get_student_str', 'get_teacher_str')

    def get_queryset(self, request):
        qs = super().get_queryset(request)
        prefetch_qs = UserProfile.objects.only('user').select_related('user')
        prefetch1 = Prefetch('students', queryset=prefetch_qs)
        prefetch2 = Prefetch('teachers', queryset=prefetch_qs)
        qs = qs.prefetch_related(prefetch1).prefetch_related(prefetch2)
        return qs

    def get_student_str(self, obj):
        return ", ".join([u.user.username for u in obj.students.all()])
    get_student_str.short_description = 'Students'

    def get_teacher_str(self, obj):
        return ", ".join([u.user.username for u in obj.teachers.all()])
    get_teacher_str.short_description = 'Teachers'


class ExerciseAdmin(admin.ModelAdmin):
    list_display = ('id', 'get_program_str', 'lesson', 'status', 'assigned', 'verifier')

    def get_queryset(self, request):
        qs = super().get_queryset(request)
        prefetch_qs1 = UserProfile.objects.only('user').select_related('user')
        prefetch1 = Prefetch('assigned', queryset=prefetch_qs1)
        prefetch2 = Prefetch('verifier', queryset=prefetch_qs1)
        # prefetch_qs3 = Lesson.objects.all().prefetch_related(prefetch3)
        # prefetch4 = Prefetch('lesson', queryset=prefetch_qs3)
        qs = qs.prefetch_related(prefetch1).prefetch_related(prefetch2)
        return qs

    def get_program_str(self, obj):
        return obj.lesson.program.title
    get_program_str.short_description = 'Program'


class LessonAdmin(admin.ModelAdmin):
    list_display = ('id', 'get_program_str', 'name', 'day', 'get_teacher_str')

    def get_queryset(self, request):
        qs = super().get_queryset(request)
        prefetch_qs2 = UserProfile.objects.only('user').select_related('user')
        prefetch2 = Prefetch('teachers', queryset=prefetch_qs2)
        prefetch_qs1 = Program.objects.only('title', 'teachers').prefetch_related(prefetch2)
        prefetch1 = Prefetch('program', queryset=prefetch_qs1)
        qs = qs.prefetch_related(prefetch1)
        return qs

    def get_program_str(self, obj):
        return obj.program.title
    get_program_str.short_description = 'Program'

    def get_teacher_str(self, obj):
        return ", ".join([u.user.username for u in obj.program.teachers.all()])
    get_teacher_str.short_description = 'Teachers'


class CurrencyRateAdmin(admin.ModelAdmin):

    actions = ["update_currency_rates",]

    def update_currency_rates(self, request, queryset):
        for rate in queryset:
            pair = "{}RUB".format(rate.currency.upper())
            response = requests.get(
                "https://www.freeforexapi.com/api/live?pairs={}".format(pair)
            )
            data = response.json()

            rate.rate = data['rates'][pair]['rate']
            rate.save(update_fields=['rate'])

        update_currency.delay()


admin.site.register(CurrencyRate, CurrencyRateAdmin)
admin.site.register(Program, ProgramAdmin)
admin.site.register(Exercise, ExerciseAdmin)
admin.site.register(Lesson, LessonAdmin)

