from django.contrib import admin
from .models import InstructorVO, Class, StudentVO

# Register your models here.
# admin.site.register(InstructorVO)
@admin.register(InstructorVO)
class InstructorVO(admin.ModelAdmin):
    pass

@admin.register(StudentVO)
class StudentVO(admin.ModelAdmin):
    pass

@admin.register(Class)
class Class(admin.ModelAdmin):
    pass