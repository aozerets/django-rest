from django.db import models
from django.db.models import Prefetch


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


class ExerciseManager(models.Manager):
    def get_queryset(self):
        prefetch_qs2 = Lesson.objects.all().select_related('program')
        prefetch2 = Prefetch('lesson', queryset=prefetch_qs2)
        return super().get_queryset().prefetch_related(prefetch2)


class Exercise(models.Model):
    EX_STATUS = (
        ("done", 'done'),
        ("not done", 'not done'),
        ("check", 'checking'),
        ("new", 'new'),
    )
    status = models.CharField(max_length=10, choices=EX_STATUS)
    lesson = models.ForeignKey(Lesson, blank=True, null=True, on_delete=models.CASCADE)
    assigned = models.ForeignKey('main.UserProfile', related_name='exercises', blank=True, on_delete=models.CASCADE)
    verifier = models.ForeignKey('main.UserProfile', related_name='verifier', blank=True, null=True, on_delete=models.SET_NULL)
    objects = ExerciseManager()

    def __str__(self):
        return self.lesson.name + "_exercise"


class CurrencyRate(models.Model):

    CURRENCIES = (
        ('usd', 'usd'),
        ('eur', 'eur')
    )

    currency = models.CharField(max_length=3, choices=CURRENCIES)
    rate = models.DecimalField(max_digits=10, decimal_places=6, default=1)

    def __str__(self):
        return "{} ({})".format(self.currency, self.rate)

    def save(self, *args, **kwargs):
        if not self.pk:
            try:
                rate = CurrencyRate.objects.get(currency=self.currency)
                self.pk = rate.pk
            except CurrencyRate.DoesNotExist:
                pass
        super().save(*args, **kwargs)
