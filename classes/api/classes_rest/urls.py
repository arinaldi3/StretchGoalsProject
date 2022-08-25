from django.urls import path
from .views import api_class, api_classes, api_instructorVO

urlpatterns = [
    path('classes/', api_classes, name='api_classes'),
    path('classes/<int:pk>/', api_class, name='api_class'),
    path('instructorvo/', api_instructorVO, name='api_get_instructors'),
]