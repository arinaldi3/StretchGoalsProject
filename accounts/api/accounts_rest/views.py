from dis import Instruction
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
from .models import Instructor, Student
import djwto.authentication as auth
from .encoders import InstructorListEncoder, InstructorCreateEncoder, InstructorDetailEncoder, StudentListEncoder, StudentDetailEncoder 
import json
from .acls import get_photo, get_photo2

@require_http_methods(["GET"])
def api_user_token(request):
    if "jwt_access_token" in request.COOKIES:
        token = request.COOKIES["jwt_access_token"]
        if token:
            return JsonResponse({"token": token})
    response = JsonResponse({"token": None})
    return response

def api_user_token(request):
    # print("request", request)
    if "jwt_access_token" in request.COOKIES:
        token = request.COOKIES["jwt_access_token"]
        # print('token in api_user_token view.py', token)
        if token:
            return JsonResponse({"token": token})
    response = JsonResponse({"token": None})
    return response

@require_http_methods(["GET"])
@auth.jwt_login_required
def api_current_user(request, username):
    print(request.payload)
    if request.payload["student"]:
        username = request.payload["user"]["username"]
        user = Student.objects.get(username=username)
        return JsonResponse(
            {
                "id": user.id,
                "username": user.username,
                "profile_picture": user.profile_picture,
                "email": user.email,
                "first_name": user.first_name,
                "last_name": user.last_name,
                "address": user.address,
                "phone_number": user.phone_number,
            })
    else:
        username = request.payload["instructor"]["username"]
        user = Instructor.objects.get(username=username)
        return JsonResponse(
        {
            "id": user.id,
            "username": user.username,
            "profile_picture": user.profile_picture,
            "email": user.email,
            "first_name": user.first_name,
            "last_name": user.last_name,
            "address": user.address,
            "phone_number": user.phone_number,
            "yoga_studio": user.yoga_studio,
            "demo": user.demo,
            "instagram": user.instagram,
            "certification": user.certification
        })

@require_http_methods(['GET', 'POST'])
def api_instructors(request):
    """
    RESTful API for instructor Object.

    Get request returns a dict with key instructors that contains a
    list of instructors and their properties.

    Post request creates a instructor resource and returns its details

    instructor object looks like (inst_obj)
    {
        "username": account username,
        "profile_picture": pexels image,
        "password": account password,
        "email": user's email,
        "first_name": user's first name,
        "last_name": user's last name,
        "address": user's address,
        "phone_number": user's submitted phone number,
        "certification": instructor's certification level,
        "yoga_studio": instructor's yoga studio,
        "demo": url link to a video demo,
        "instagram": url link to user's instagram
    }

    List looks like
    {
        'instructors': [
            inst_obj1,
            inst_obj2,
            ...
        ]
    }
    with each inst_obj being in the format of

    {
        "id": database id for the instructor,
        "username": account username,
        "profile_picture": pexels image,
        "first_name": user's first name,
        "last_name": user's last name,
        "certification": instructor's certification level,
        "demo": url link to a video demo,
    }
    """

    if request.method == 'GET':
        instructors = Instructor.objects.all()
        return JsonResponse(
            {"instructors": instructors},
            encoder=InstructorListEncoder
        )
    else:
        try:
            content = json.loads(request.body)
            photo = get_photo(content["profile_pic"])
            content.update(photo)
            instructor = instructor.objects.create(**content)
            return JsonResponse(
                instructor,
                encoder=InstructorCreateEncoder,
                safe=False,
            )
        except:
            return JsonResponse(
                {"message": "Make sure all fields are filled out!"},
                status=400,
            )

@require_http_methods(["DELETE", "GET", "PUT"])
def api_instructor(request, pk):
    """
    Single-object API for the Instructor resource.

    GET:
    Returns the information for an Instructor resource based
    on the value of pk
    {
        "id": database id for the instructor,
        "username": account username,
        "profile_picture": pexels image,
        "first_name": user's first name,
        "last_name": user's last name,
        "certification": instructor's certification level,
        "yoga_studio": instructor's yoga studio,
        "demo": url link to a video demo,
        "instagram": url link to user's instagram
    }

    PUT:
    Updates the information for an Instructor resource based
    on the value of the pk
    {
        "id": database id for the instructor,
        "username": account username,
        "profile_picture": pexels image,
        "password": account password,
        "email": user's email,
        "first_name": user's first name,
        "last_name": user's last name,
        "address": user's address,
        "phone_number": user's submitted phone number,
        "certification": instructor's certification level,
        "yoga_studio": instructor's yoga studio,
        "demo": url link to a video demo,
        "instagram": url link to user's instagram
    }

    DELETE:
    Removes the Instructor resource from the application
    """
    if request.method == "GET":
        try:
            instructor = Instructor.objects.get(id=pk)
            return JsonResponse(
                instructor,
                encoder=InstructorDetailEncoder,
                safe=False
            )
        except instructor.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    elif request.method == "DELETE":
        try:
            instructor = Instructor.objects.get(id=pk)
            instructor.delete()
            return JsonResponse(
                instructor,
                encoder=InstructorListEncoder,
                safe=False,
            )
        except instructor.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})
    else: # PUT
        try:
            content = json.loads(request.body)
            instructor = Instructor.objects.get(id=pk)

            props = [
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
            for prop in props:
                if prop in content:
                    setattr(instructor, prop, content[prop])
            instructor.save()
            return JsonResponse(
                instructor,
                encoder=InstructorCreateEncoder,
                safe=False,
            )
        except instructor.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response

@require_http_methods(['GET', 'POST'])
def api_students(request):
    """
    RESTful API for Student Object.

    Get request returns a dict with key students that contains a
    list of students and their properties.

    Post request creates a student resource and returns its details

    Student object looks like (stud_obj)
    {
        "id": database id for Student,
        "username": account username,
        "profile_picture": pexels image,
        "password": account password,
        "email": user's email,
        "first_name": user's first name,
        "last_name": user's last name,
        "address": user's address,
        "phone_number": user's submitted phone number
    }

    List looks like
    {
        'students': [
            stud_obj1,
            stud_obj2,
            ...
        ]
    }
    with each stud_obj being in the format of 

    {
        "id": database id for the student,
        "username": account username,
        "profile_picture": pexels image,
        "first_name": user's first name,
        "last_name": user's last name,
    }
    """

    if request.method == 'GET':
        students = Student.objects.all()
        return JsonResponse(
            {"students": students},
            encoder=StudentListEncoder
        )
    else:
        try:
            content = json.loads(request.body)
            photo = get_photo2(content["profile_pic"])
            content.update(photo)
            student = Student.objects.create(**content)
            return JsonResponse(
                student,
                encoder=StudentDetailEncoder,
                safe=False,
            )
        except:
            return JsonResponse(
                {"message": "Make sure all fields are filled out!"},
                status=400,
            )

@require_http_methods(["DELETE", "PUT"])
def api_student(request, pk):
    """
    Single-object API for the Instructor resource.

    PUT:
    Updates the information for an Student resource based
    on the value of the pk
    {
        "username": account username,
        "profile_picture": pexels image,
        "password": account password,
        "email": user's email,
        "first_name": user's first name,
        "last_name": user's last name,
        "address": user's address,
        "phone_number": user's submitted phone number
    }

    DELETE:
    Removes the Student resource from the application
    """
    if request.method == "DELETE":
        try:
            student = Student.objects.get(id=pk)
            student.delete()
            return JsonResponse(
                student,
                encoder=StudentListEncoder,
                safe=False,
            )
        except student.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})
    else: # PUT
        try:
            content = json.loads(request.body)
            student = Student.objects.get(id=pk)

            props = [
                "username",
                "profile_picture",
                "password",
                "email",
                "first_name",
                "last_name",
                "address",
                "phone_number",
            ]
            for prop in props:
                if prop in content:
                    setattr(student, prop, content[prop])
            student.save()
            return JsonResponse(
                student,
                encoder=InstructorCreateEncoder,
                safe=False,
            )
        except student.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response