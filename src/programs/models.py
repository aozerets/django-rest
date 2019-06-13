from django.db import models


class Program(models.Model):
    title = models.CharField(max_length=30)
    description = models.TextField(max_length=500)
    start = models.DateField()
    students = models.ManyToManyField('main.UserProfile', related_name='student_programs', blank=True)
    teachers = models.ManyToManyField('main.UserProfile', related_name='teacher_programs', blank=True)

    def __str__(self):
        return self.title


class Lesson(models.Model):
    name = models.CharField(max_length=30)
    description = models.TextField(max_length=500)
    program = models.ForeignKey(Program, related_name="lessons", on_delete=models.CASCADE)
    day = models.DateTimeField(blank=True)

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
    assigned = models.ManyToManyField('main.UserProfile', blank=True)
    verifier = models.ForeignKey('main.UserProfile', related_name='verifier', blank=True, null=True, on_delete=models.SET_NULL)

    def __str__(self):
        return self.name
