# Generated by Django 4.0.3 on 2022-09-13 17:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('classes_rest', '0005_remove_class_students_studentvo__class'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='studentvo',
            name='_class',
        ),
        migrations.AddField(
            model_name='class',
            name='students',
            field=models.ManyToManyField(to='classes_rest.studentvo'),
        ),
    ]
