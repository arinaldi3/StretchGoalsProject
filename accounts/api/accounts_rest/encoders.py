from common.json import ModelEncoder
from .models import Instructor, Student

class InstructorListEncoder(ModelEncoder):
    model = Instructor
    properties = [
        "id",
        "username",
        "email",
        "first_name",
        "last_name",
        "demo",
        "certification",
    ]

class InstructorCreateEncoder(ModelEncoder):
    model = Instructor
    properties = [
        "id",
        "username",
        "password",
        "email",
        "first_name",
        "last_name",
        "address",
        "phone_number",
        "yoga_studio",
        "demo",
        "instagram",
        "certification",
    ]

class InstructorDetailEncoder(ModelEncoder):
    model = Instructor
    properties = [
        "id",
        "username",
        "first_name",
        "last_name",
        "yoga_studio",
        "demo",
        "instagram",
        "certification",
    ]

class StudentListEncoder(ModelEncoder):
    model = Student
    properties = [
        "id",
        "username",
        "email",
        "first_name",
        "last_name",
        "address",
        "phone_number",
    ]

