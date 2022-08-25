from xmlrpc.client import Boolean
from django.db import models

# Create your models here.
class InstructorVO(models.Model):
    import_href = models.CharField(max_length=100, null=True, blank=True)
    username = models.CharField(max_length=50, unique=True)
    yoga_studio = models.CharField(max_length=50)
    demo = models.URLField()
    profile_picture = models.CharField(max_length=40)


class Beholder(models.Model):
    requirement_met = models.BooleanField(default=False)
    badge = models.URLField()

class Yogi(models.Model):
    requirement_met = models.BooleanField(default=False)
    badge = models.URLField()

class Guru(models.Model):
    requirement_met = models.BooleanField(default=False)
    badge = models.URLField()

class Levels(models.Model):
    beholder = models.ForeignKey(Beholder, related_name="beholder", on_delete=models.CASCADE)
    yogi = models.ForeignKey(Yogi, related_name="yogi", on_delete=models.CASCADE)
    guru = models.ForeignKey(Guru, related_name="guru", on_delete=models.CASCADE)
