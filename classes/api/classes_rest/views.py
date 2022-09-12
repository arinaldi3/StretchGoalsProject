from dis import Instruction
import re
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
from .models import InstructorVO, Class, StudentVO
from .encoders import ClassEncoder, InstructorVOEncoder, StudentVOEncoder
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

@require_http_methods('GET')
def api_studentVO(request):
    """
    RESTful API for StudentVO object.

    Get request returns a dict with key students that contains a
    list of students and their properties.

    This function exists so that I can call an api route in react and 
    get a list of students without holding all their sensitive information.
    """
    if request.method == 'GET':
        students = StudentVO.objects.all()
        return JsonResponse(
            {'instructors': students},
            encoder=StudentVOEncoder
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
        content = json.loads(request.body)
        try:
            inst_id = content['instructor']
            instructor = InstructorVO.objects.get(id=inst_id)
            content['instructor'] = instructor
            print(content)
        except InstructorVO.DoesNotExist:
            return JsonResponse(
                {"message": "Instructor not found"},
                status=404,
            )
        try:
            lesson = Class.objects.create(**content)
            return JsonResponse(
                lesson,
                encoder=ClassEncoder,
                safe=False,
            )
        except Exception as e:
            print(e)
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
        "students": students in the class
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
        "students": students in the class
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
                "difficulty",
                "class_size",
                "class_name",
                "start",
                "end",
                "schedule",
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
        

@require_http_methods("PUT")
def api_attend_class(request, pk):
    """
    Single-object API for the Class resource to allow students to signup for classes.

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
        "students": students taking the class
    }
    I'll be taking the studentVO objects and linking them to classes throught the foreign key.

    """
    
    if request.method == "PUT": # PUT
        content = json.loads(request.body)
        lesson = Class.objects.get(id=pk)

        try:
            stu_id = content['student']
            student = StudentVO.objects.get(id=stu_id)
            content['student'] = student
            print(content)
        except StudentVO.DoesNotExist:
            return JsonResponse(
                {"message": "student not found"},
                status=404,
            )
        try:
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