from dis import Instruction
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
from accounts.api.accounts_rest.models import Instructor, Student
import djwto.authentication as auth

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