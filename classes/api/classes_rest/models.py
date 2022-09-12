from django.db import models
# Create your models here.

class InstructorVO(models.Model):
    import_href = models.CharField(max_length=100, null=True, blank=True)
    username = models.CharField(max_length=50, unique=True)
    yoga_studio = models.CharField(max_length=50)
    demo = models.URLField()
    profile_picture = models.CharField(max_length=300)
    first_name = models.CharField(max_length=50, null=True)
    last_name = models.CharField(max_length=50, null=True)
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
    
class StudentVO(models.Model):
    username = models.CharField(max_length=50, unique=True)
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    phone_number = models.CharField(max_length=50, unique=True)
    _class = models.ForeignKey(
        Class,
        related_name='lesson',
        on_delete=models.PROTECT,
        null=True, blank=True
    )

    def __str__(self):
        return f'{self.first_name} {self.last_name}'
    

