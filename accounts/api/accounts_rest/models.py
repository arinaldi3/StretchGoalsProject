from ctypes import addressof
from django.db import models
from django.db import models
from django.contrib.auth.models import PermissionsMixin, AbstractBaseUser
from django.core.validators import int_list_validator
# Create your models here.
from django.db import models

class Student(AbstractBaseUser):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=50, unique=True)
    USERNAME_FIELD = 'username'
    password = models.CharField(max_length=25)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    address = models.CharField(max_length=150)
    phone_number = models.CharField(max_length=50, unique=True)
    profile_picture = models.URLField()



class Instructor(AbstractBaseUser):
    email = models.EmailField(unique=True, null=True)
    username = models.CharField(max_length=50, unique=True)
    USERNAME_FIELD = 'username'
    password = models.CharField(max_length=25)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    address = models.CharField(max_length=150)
    phone_number = models.CharField(max_length=50, unique=True)
    certification = models.CharField(max_length=100, null=True, blank=True)
    yoga_studio = models.CharField(max_length=50, null=True, blank=True)
    demo = models.URLField(null=True, blank=True)
    instagram = models.URLField(unique=True, null=True, blank=True)
    profile_picture = models.URLField()

