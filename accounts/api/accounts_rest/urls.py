from django.urls import path

from accounts.api.accounts_rest.views import api_instructor, api_student


urlpatterns = [
    path('instructors/', api_instructor, name='api_instructor'),
    path('students/', api_student, name='api_student'),
]