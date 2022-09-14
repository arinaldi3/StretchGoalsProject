from common.json import ModelEncoder
from .models import Class, InstructorVO, StudentVO

class InstructorVOEncoder(ModelEncoder):
    print("InstructorVO!!!")
    model = InstructorVO
    properties = [
        "id",
        "username",
        "yoga_studio",
        "demo",
        "profile_picture"
    ]

class StudentVOEncoder(ModelEncoder):
    print("StudentVO!!!")
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
        "students",
        "instructor",
    ]
    encoders = {
        'instructor': InstructorVOEncoder(),
        'students': StudentVOEncoder(),
    }

