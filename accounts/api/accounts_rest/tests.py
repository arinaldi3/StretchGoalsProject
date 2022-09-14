from django.test import TestCase

# Create your tests here.
from unittest import TestCase
from models import Student, Instructor
# from recipes.templatetags.servings_mod import modify



class StudentTestCase(TestCase):
    def setUp(self):
        Student.objects.create(username="username")
        Student.objects.create(username="username1")

    def test_username_gets_created(self):

        student1 = Student.objects.get(name="username")
        student2 = Student.objects.get(name="username1")
        self.assertEqual(student1, "username")
        self.assertEqual(student2, "username1")




# class ProblemTests(TestCase):
#     def test_returns_min_value_if_first_parameter(self):
#         value = minimum_value(1, 3)
#         self.assertEqual(1, value)

#     def test_returns_min_value_if_second_parameter(self):
#         value = minimum_value(3, 2)
#         self.assertEqual(2, value)