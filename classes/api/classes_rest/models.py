from django.db import models
# Create your models here.

class InstructorVO(models.Model):
    import_href = models.CharField(max_length=100, null=True, blank=True)
    username = models.CharField(max_length=50, unique=True)
    yoga_studio = models.CharField(max_length=50)
    demo = models.URLField()
    profile_picture = models.CharField(max_length=300)
    def __str__(self):
        return self.username


class Class(models.Model):
    difficulty = models.CharField(max_length=30)
    class_size = models.IntegerField()
    class_name = models.CharField(max_length=100)
    start = models.DateTimeField()
    end = models.DateTimeField()
    schedule = models.TextField()
    instructor = models.ForeignKey(
        InstructorVO, 
        related_name="instructor", 
        on_delete=models.PROTECT, 
        null=True, blank=True
        )

    

