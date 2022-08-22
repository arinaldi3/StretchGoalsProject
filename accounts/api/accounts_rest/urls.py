from django.urls import path

from accounts.api.accounts_rest.views import api_instructor, api_student, api_current_user


urlpatterns = [
    path('instructors/', api_instructors, name='api_instructors'),
    path('instructors/', api_instructor, name='api_instructor'),
    path('students/', api_students, name='api_students'),
    path('students/<int:pk>/', api_student, name='api_student'),
    path('account/<str:username>', api_current_user, name="api_current_user")
]