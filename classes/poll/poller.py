import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "classes_project.settings")
django.setup()

from classes_rest.models import InstructorVO, StudentVO

# Import models from classes_rest, here.
# from classes_rest.models import InstructorVO
def get_instructor():
    print("TESTING")
    response = requests.get("http://accounts-api:8000/api/instructors/")
    print(response.status_code)
    content = json.loads(response.content)
    for instructor in content["instructors"]:
        print("instructor: ", instructor)
        InstructorVO.objects.update_or_create(
            id=instructor["id"],
            defaults={
                "username": instructor["username"],
                "yoga_studio": instructor["yoga_studio"],
                "demo": instructor["demo"],
                "profile_picture": instructor["profile_picture"]
            }
        )

def get_student():
    print("TESTING")
    response = requests.get("http://accounts-api:8000/api/students/")
    print(response.status_code)
    content = json.loads(response.content)
    for student in content["students"]:
        print("student: ", student)
        StudentVO.objects.update_or_create(
            id=student["id"],
            defaults={
                "username": student["username"],
                "email": student["email"],
                "first_name": student["first_name"],
                "last_name": student["last_name"],
                "phone_number": student["phone_number"]
            }
        )


def poll():
    while True:
        print('classes polling for data')
        try:
            # Write your polling logic, here
            get_instructor()
            get_student()
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(60)


if __name__ == "__main__":
    poll()
