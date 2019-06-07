from django.db import models


class Program(models.Model):
    title = models.CharField(max_length=30)
    start = models.DateTimeField()
    students = models.ManyToManyField('main.UserProfile', related_name='students', blank=True)
    teachers = models.ManyToManyField('main.UserProfile', related_name='teachers', blank=True)

    def __str__(self):
        return self.title


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
    assigned = models.ManyToManyField('main.UserProfile', blank=True)
    verifier = models.ForeignKey('main.UserProfile', related_name='verifier', blank=True, null=True, on_delete=models.SET_NULL)

    def __str__(self):
        return self.name
