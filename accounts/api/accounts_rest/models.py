from ctypes import addressof
from django.db import models
from django.db import models
from django.contrib.auth.models import PermissionsMixin, AbstractBaseUser
from django.core.validators import int_list_validator
# Create your models here.
from django.db import models

# class User(AbstractBaseUser):
#     is_instructor = models.BooleanField()

# class Student(models.Model):
#     REQUIRED_FIELDS = []
#     user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
#     email = models.EmailField(unique=True)
#     username = models.CharField(max_length=50, unique=True)
#     USERNAME_FIELD = 'username'
#     password = models.CharField(max_length=25)
#     first_name = models.CharField(max_length=50)
#     last_name = models.CharField(max_length=50)
#     address = models.CharField(max_length=150)
#     phone_number = models.CharField(max_length=50, unique=True)
#     profile_picture = models.CharField(max_length=40)

#     def __str__(self):
#         return f"{self.email}"


# class Instructor(models.Model):
#     REQUIRED_FIELDS = []
#     user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
#     email = models.EmailField(unique=True)
#     username = models.CharField(max_length=50, unique=True)
#     USERNAME_FIELD = 'username'
#     password = models.CharField(max_length=25)
#     first_name = models.CharField(max_length=50)
#     last_name = models.CharField(max_length=50)
#     address = models.CharField(max_length=150)
#     phone_number = models.CharField(max_length=50, unique=True)
#     certification = models.CharField(max_length=100)
#     yoga_studio = models.CharField(max_length=50)
#     demo = models.URLField()
#     instagram = models.URLField(unique=True)
#     profile_picture = models.CharField(max_length=40)

#     def __str__(self):
#         return f"{self.email}"

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
    username = models.CharField(max_length=50, unique=True)
    USERNAME_FIELD = 'username'
    password = models.CharField(max_length=25)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    address = models.CharField(max_length=150)
    phone_number = models.CharField(max_length=50, unique=True)
    certification = models.CharField(max_length=100)
    yoga_studio = models.CharField(max_length=50)
    demo = models.URLField()
    instagram = models.URLField(unique=True)
    profile_picture = models.URLField()

