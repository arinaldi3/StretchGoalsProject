from django.contrib import admin
from .models import InstructorVO, Class

# Register your models here.
# admin.site.register(InstructorVO)
@admin.register(InstructorVO)
class InstructorVO(admin.ModelAdmin):
    pass