from dis import Instruction
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
from .models import InstructorVO, Class
from .encoders import ClassEncoder, InstructorVOEncoder
import json
from .acls import get_photo


# Create your views here.
@require_http_methods('GET')
def api_instructorVO(request):
    """
    RESTful API for InstructorVO object.

    Get request returns a dict with key instructors that contains a
    list of instructors and their properties.

    This function exists so that I can call an api route in react and 
    get a list of instructors without holding all their sensitive information.
    """
    if request.method == 'GET':
        instructors = InstructorVO.objects.all()
        return JsonResponse(
            {'instructors': instructors},
            encoder=InstructorVOEncoder
        )

@require_http_methods(['GET', 'POST'])
def api_classes(request):
    """
    RESTful API for class Object.

    Get request returns a dict with key classes that contains a
    list of classes and their properties.

    Post request creates a class resource and returns its details

    class object looks like (clas_obj)
    {
        "id": database id for class
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
    with each inst_obj being in the format of obj above
    """
    if request.method == 'GET':
        try:
            classes = Class.objects.all()
            return JsonResponse(
                {"classes": classes},
                encoder=ClassEncoder
            )
        except:
            return JsonResponse(
                    {"message": "Class list is empty!"},
                    status=400,
            )
    else:
        try:
            content = json.loads(request.body)
            photo = get_photo(content["profile_picture"])
            content.update(photo)
            lesson = Class.objects.create(**content)
            return JsonResponse(
                lesson,
                encoder=ClassEncoder,
                safe=False,
            )
        except:
            return JsonResponse(
                {"message": "Make sure all fields are filled out!"},
                status=400,
            )

@require_http_methods(["DELETE", "GET", "PUT"])
def api_class(request, pk):
    """
    Single-object API for the Class resource.

    GET:
    Returns the information for an Class resource based
    on the value of pk
    {
        "id": database id for class
        "difficulty": difficulty of class
        "class_size": size/number of students in class
        "class_name": name of class
        "start": start date/time of class
        "end": end date/time of class
        "schedule": days of week class occurs
        "instructor": instructor teaching the class
    }

    PUT:
    Updates the information for an Class resource based
    on the value of the pk
    {
        "id": database id for class
        "difficulty": difficulty of class
        "class_size": size/number of students in class
        "class_name": name of class
        "start": start date/time of class
        "end": end date/time of class
        "schedule": days of week class occurs
        "instructor": instructor teaching the class
    }

    DELETE:
    Removes the Class resource from the application
    """
    if request.method == "GET":
        try:
            lesson = Class.objects.get(id=pk)
            return JsonResponse(
                lesson,
                encoder=ClassEncoder,
                safe=False
            )
        except lesson.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    elif request.method == "DELETE":
        try:
            lesson = Class.objects.get(id=pk)
            lesson.delete()
            return JsonResponse(
                lesson,
                encoder=ClassEncoder,
                safe=False,
            )
        except lesson.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})
    else: # PUT
        try:
            content = json.loads(request.body)
            lesson = Class.objects.get(id=pk)

            props = [
                "id",
                "username",
                "profile_picture",
                "first_name",
                "last_name",
                "certification",
                "demo",
            ]
            for prop in props:
                if prop in content:
                    setattr(lesson, prop, content[prop])
            lesson.save()
            return JsonResponse(
                lesson,
                encoder=ClassEncoder,
                safe=False,
            )
        except lesson.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
