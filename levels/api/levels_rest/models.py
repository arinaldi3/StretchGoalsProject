from django.db import models

# Create your models here.
class InstructorVO(models.Model):
    import_href = models.CharField(max_length=100, null=True, blank=True)
    username = models.CharField(max_length=50, unique=True)
    yoga_studio = models.CharField(max_length=50)
    demo = models.URLField()
    profile_picture = models.CharField(max_length=40)


class Beholder(models.Model):
    requirements = models.TextField(max_length=50)
    badge = models.URLField()

class Yogi(models.Model):
    requirements = models.TextField(max_length=50)
    badge = models.URLField()

class Guru(models.Model):
    requirements = models.TextField(max_length=50)
    badge = models.URLField()