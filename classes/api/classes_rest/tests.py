from django.test import TestCase, Client
from unittest import TestCase
from .views import api_instructorVO
# Create your tests here.
class TestGetInstructor(unittest.TestCase):
    def setUp(self):
        # Every test needs access to the request factory.
        self.factory = RequestFactory()

    def test_details(self):
        # Create an instance of a GET request.
        request = self.factory.get('/api/instructors')

        # Test my_view() as if it were deployed at /customer/details
        response = api_instructorVO(request)
        self.assertEqual(response.status_code, 200)