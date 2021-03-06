# Generated by Django 2.2.2 on 2019-06-13 13:14

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Program',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=30)),
                ('description', models.TextField(max_length=500)),
                ('start', models.DateField()),
                ('students', models.ManyToManyField(blank=True, related_name='student_programs', to='main.UserProfile')),
                ('teachers', models.ManyToManyField(blank=True, related_name='teacher_programs', to='main.UserProfile')),
            ],
        ),
        migrations.CreateModel(
            name='Lesson',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('description', models.TextField(max_length=500)),
                ('day', models.DateTimeField(blank=True)),
                ('program', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='lessons', to='programs.Program')),
            ],
        ),
        migrations.CreateModel(
            name='Exercise',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('status', models.CharField(choices=[('done', 'done'), ('not done', 'not done'), ('check', 'checking'), ('new', 'new')], max_length=10)),
                ('assigned', models.ManyToManyField(blank=True, to='main.UserProfile')),
                ('lesson', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='programs.Lesson')),
                ('verifier', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='verifier', to='main.UserProfile')),
            ],
        ),
    ]
