from ctypes import addressof
from django.db import models
from django.db import models
from django.contrib.auth.models import AbstractUser, PermissionsMixin
from django.core.validators import int_list_validator
# Create your models here.


class Student(AbstractUser):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=25)
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=150)
    phone_number = models.CharField(max_length=50)



    def __str__(self):
        return f"{self.email}"


class Instructor(AbstractUser):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=25)
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=150)
    phone_number = models.CharField(max_length=50)
    certification = models.CharField(max_length=100)
    yoga_studio = models.CharField(max_length=50)
    demo = models.URLField()
    instagram = models.URLField()
    def __str__(self):
        return f"{self.email}"
