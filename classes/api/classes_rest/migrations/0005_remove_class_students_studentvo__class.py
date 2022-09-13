# Generated by Django 4.0.3 on 2022-09-13 03:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('classes_rest', '0004_remove_studentvo__class_class_students'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='class',
            name='students',
        ),
        migrations.AddField(
            model_name='studentvo',
            name='_class',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='lesson', to='classes_rest.class'),
        ),
    ]
