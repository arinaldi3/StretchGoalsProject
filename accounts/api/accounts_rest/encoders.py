from common.json import ModelEncoder
from .models import Instructor, Student

class InstructorListEncoder(ModelEncoder):
    model = Instructor
    properties = [
        "id",
        "username",
        "profile_picture",
        "first_name",
        "last_name",
        "certification",
        "demo",
        "email",
        "instagram",
        "yoga_studio",
        "phone_number",
    ]

class InstructorCreateEncoder(ModelEncoder):
    model = Instructor
    properties = [
        "id",
        "username",
        "profile_picture",
        "password",
        "email",
        "first_name",
        "last_name",
        "address",
        "phone_number",
        "certification",
        "yoga_studio",
        "demo",
        "instagram",
    ]

class InstructorDetailEncoder(ModelEncoder):
    model = Instructor
    properties = [
        "id",
        "username",
        "profile_picture",
        "first_name",
        "last_name",
        "certification",
        "yoga_studio",
        "demo",
        "instagram",
        # "email",
    ]

class StudentListEncoder(ModelEncoder):
    model = Student
    properties = [
        "id",
        "username",
        "profile_picture",
        "first_name",
        "last_name",
        "email",
        "phone_number"
    ]


class StudentDetailEncoder(ModelEncoder):
    model = Student
    properties = [
        "id",
        "username",
        "profile_picture",
        "password",
        "email",
        "first_name",
        "last_name",
        "address",
        "phone_number",
    ]

