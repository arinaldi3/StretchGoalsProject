from dis import Instruction
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
from .models import InstructorVO, Class
import djwto.authentication as auth
from .encoders import 
import json


# Create your views here.
@require_http_methods(['GET', 'POST'])
def api_classes(request):
    """
    RESTful API for class Object.

    Get request returns a dict with key classes that contains a
    list of classes and their properties.

    Post request creates a class resource and returns its details

    class object looks like (clas_obj)
    {
        "difficulty": difficulty of class
        "class_size": size/number of students in class
        "class_name": name of class
        "start": start date/time of class
        "end": end date/time of class
        "schedule": days of week class occurs
        "instructor": instructor teaching the class
    }

    List looks like
    {
        'classes': [
            clas_obj1,
            clas_obj2,
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
        try:
            instructors = Instructor.objects.all()
            return JsonResponse(
                {"instructors": instructors},
                encoder=InstructorListEncoder
            )
        except:
            return JsonResponse(
                    {"message": "Instructor list is empty!"},
                    status=400,
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
