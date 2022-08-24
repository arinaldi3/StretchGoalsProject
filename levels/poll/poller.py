import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "levels.settings")
django.setup()

from levels_rest.models import InstructorVO

# Import models from sales_rest, here.
# from sales_rest.models import Something
def get_instructor():
    response = requests.get("http://accounts-api:8000/api/accounts/")
    content = json.loads(response.content)
    for instructor in content["instructors"]:
        InstructorVO.objects.update_or_create(
            import_href=instructor["href"],
            defaults={
                "username": instructor["username"],
                "yoga_studio": instructor["yoga_studio"],
                "demo": instructor["demo"],
                "profile_picture": instructor["profile_picture"]
            }
        )
        print("instructor: ", instructor)

def poll():
    while True:
        print('levels polling for data')
        try:
            # Write your polling logic, here
            get_instructor()
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(60)


if __name__ == "__main__":
    poll()
