from django.urls import path

from .views import api_attend_class, api_class, api_classes, api_instructorVO, api_studentVO

urlpatterns = [
    path('classes/', api_classes, name='api_classes'),
    path('classes/<int:pk>/', api_class, name='api_class'),
    path('instructorvo/', api_instructorVO, name='api_get_instructors'),
    path('studentvo/', api_studentVO, name='api_get_students'),
    path('classes/<int:pk>/attend/', api_attend_class, name='api_attend_class'),
]