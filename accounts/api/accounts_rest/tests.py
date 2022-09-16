from django.test import TestCase
from django.contrib.auth.models import User
from django.test import Client
import json
import requests
from django.test import SimpleTestCase
from django.urls import reverse  
from django.contrib.auth import get_user_model

# Josh Tests
from unittest import TestCase
from .models import Student, Instructor

class TestModel(TestCase):
    def create_user(self):
        User = get_user_model()
        user = User.objects.create_user(username='test_username', 
            password='test_password',
            email='testemail@email.com')
        user.save()

        self.assertEqual(str(user), 'testemail@email.com')

def login(self):
    url = 'http://localhost:8000/login/'

    session = requests.Session()
    session.verify = False

    response = session.post(
        url,
        data={
            "username": "test_username",
            "password": "test_password",
        }
    )
    response.json()
    cookies = session.cookies.get_dict()
    if response.ok:
        url = 'http://localhost:8000/api/tokens/mine/'
        token_response = session.get(
            url,
            cookies={
                'jwt_access_token': cookies['jwt_access_payload']
                },
        )
        if token_response:
            token = token_response.json()
            return token.get('token')

def create_instructor_account_token(self):
    url = 'http://localhost:8000/api/instructors'
    session = requests.Session()
    session.verify = False

    response = session.post(
        url,
        body={
        "id": "test_id",
        "username": "test_username",
        "profile_picture": "test_profile_picture",
        "password": "test_password",
        "email": "test_email",
        "first_name": "test_first_name",
        "last_name": "test_last_name",
        "address": "test_address",
        "phone_number": "test_phone_number",
        "certification": "test_certification",
        "yoga_studio": "test_yoga_studio",
        "demo": "test-demo.com",
        "instagram": "test_instagram",
        }
    )

    if response.ok:
        token = login(self)
        return token

class CreateStudentAccount(TestCase):
    def test_create_student(self):
        url = 'http://localhost:8000/api/students/'
        sess = requests.Session()
        sess.verify = False

        body = {
            'username': 'test_username',
            'password': 'test_password',
            'email': 'test_email',
            'first_name': 'test_first_name',
            'last_name': 'test_last_name',
            'address': 'test_address',
            'phone_number': 'test_phone_number',
            'profile_picture': 'test profile',
        }
        response = sess.post(
            url,
            json=body,
        )
        
        
        self.assertEqual(response.status_code, 200)

class LoginTest(TestCase):

    def test_my_instructor_profile(self):
        url = f'http://localhost:8000/api/portal/instructor/'
        print("url: ", url)
        sess = requests.Session()
        sess.verify = False
        response = sess.get(
            url,
            cookies={'jwt_access_token': self.token},
        )

        response.json()
        self.assertEqual(response.status_code, 200)

# Alex Tests
class URLTests(SimpleTestCase):
    def test_url_exists_at_correct_location(self):
        response = self.client.get("/")
        self.assertEqual(response.status_code, 200)

    def test_url_available_by_name(self):  
        response = self.client.get(reverse("/"))
        self.assertEqual(response.status_code, 200)
    
    def test_url_available_by_name(self):  
        response = self.client.get(reverse("/instructors"))
        self.assertEqual(response.status_code, 200)
    
    def test_url_available_by_name(self):  
        response = self.client.get(reverse("/students"))
        self.assertEqual(response.status_code, 200)
    

    def test_react_content(self):
        response = self.client.get(reverse("/"))
        self.assertContains(response, "Stretch Goals... Not so far away after all!")
        self.assertNotContains(response, "Not on the page")

# class StudentTestCase(TestCase):
#     def setUp(self):
#         Student.objects.create(username="username1")
#         Student.objects.create(username="username2")

#     def test_username_gets_created(self):

#         student1 = Student.objects.get(name="username1")
#         student2 = Student.objects.get(name="username2")
#         self.assertEqual(student1, "username1")
#         self.assertEqual(student2, "username2")

# class InstructorTestCase(TestCase):
#     def setUp(self):
#         Instructor.objects.create(username="username3")
#         Instructor.objects.create(username="username4")

#     def test_username_gets_created(self):

#         instructor1 = Instructor.objects.get(name="username3")
#         instructor2 = Instructor.objects.get(name="username4")
#         self.assertEqual(instructor1, "username3")
#         self.assertEqual(instructor2, "username4")


