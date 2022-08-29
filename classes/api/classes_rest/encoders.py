from common.json import ModelEncoder
from .models import Class, InstructorVO

class InstructorVOEncoder(ModelEncoder):
    model = InstructorVO
    properties = [
        "id",
        "username",
        "yoga_studio",
        "demo",
        "profile_picture"
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
    ]
    encoders = {
        'instructor': InstructorVOEncoder(),
    }

