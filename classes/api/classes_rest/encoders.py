from common.json import ModelEncoder
from .models import Class, InstructorVO

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

class InstructorVOEncoder(ModelEncoder):
    model = InstructorVO
    properties = [
        "id",
        "username",
        "yoga_studio",
        "demo",
        "profile_picture"
    ]
