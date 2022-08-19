from django.db import models
from django.db import models
from django.contrib.auth.models import AbstractUser, PermissionsMixin
from django.core.validators import int_list_validator
# Create your models here.


class Student(AbstractUser):
    email = models.EmailField(unique=True)

    def __str__(self):
        return f"{self.email}"


class Instructor(AbstractUser):
    email = models.EmailField(unique=True)

    def __str__(self):
        return f"{self.email}"
