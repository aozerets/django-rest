# Generated by Django 2.2.2 on 2019-06-06 13:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('programs', '0004_auto_20190606_1620'),
    ]

    operations = [
        migrations.RenameField(
            model_name='exercise',
            old_name='lesson_id',
            new_name='lesson',
        ),
        migrations.RenameField(
            model_name='lesson',
            old_name='program_id',
            new_name='program',
        ),
        migrations.RenameField(
            model_name='userprofile',
            old_name='user_id',
            new_name='user',
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='status',
            field=models.CharField(choices=[('admin', 'admin'), ('teacher', 'teacher'), ('student', 'student')], max_length=10),
        ),
    ]
