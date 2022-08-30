from django.urls import path
from .views import api_instructor, api_student, api_current_user, api_instructors, api_students, api_user_token


urlpatterns = [
    # path('login/', api_user_token, name='api_user_token'),
    path('instructors/', api_instructors, name='api_instructors'),
    path('instructors/<int:pk>/', api_instructor, name='api_instructor'),
    path('students/', api_students, name='api_students'),
    path('students/<int:pk>/', api_student, name='api_student'),
    path('account/<str:username>/', api_current_user, name="api_current_user"),
    path('tokens/mine/', api_user_token, name="api_user_token")
]