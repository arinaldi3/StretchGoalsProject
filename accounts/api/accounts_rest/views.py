from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
import djwto.authentication as auth

@require_http_methods(["GET"])
def api_user_token(request):
    if "jwt_access_token" in request.COOKIES:
        token = request.COOKIES["jwt_access_token"]
        if token:
            return JsonResponse({"token": token})
    response = JsonResponse({"token": None})
    return response



# @auth.jwt_login_required
# def get_some_data(request):
#     token_data = request.payload
#     # do stuff
#     return response