from common.json import ModelEncoder
from .models import Class, InstructorVO, StudentVO

class InstructorVOEncoder(ModelEncoder):
    model = InstructorVO
    properties = [
        "id",
        "username",
        "yoga_studio",
        "demo",
        "profile_picture",
        "first_name",
        "last_name",
    ]

class StudentVOEncoder(ModelEncoder):
    model = StudentVO
    properties = [
        'id',
        'username',
        'first_name',
        'last_name',
        'email',
        'phone_number'
    ]

class ClassEncoder(ModelEncoder):
    model = Class
    properties = [
        "id",
        "difficulty",
        "class_size",
        "class_name",
        "start",
        "end",
        "schedule",
        "instructor",
    ]
    encoders = {
        'instructor': InstructorVOEncoder(),
        'student': StudentVOEncoder(),
    }

