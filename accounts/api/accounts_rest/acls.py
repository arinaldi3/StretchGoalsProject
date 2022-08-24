import json
import requests
import os


PEXELS_API_KEY = os.environ["PEXELS_API_KEY"]

def get_photo(instructor):
    headers = {"Authorization": PEXELS_API_KEY}
    params = {
        "per_page": 1,
        "query": f"{instructor.profile_picture}",
    }
    url = "https://api.pexels.com/v1/search"
    response = requests.get(url, params=params, headers=headers)
    content = json.loads(response.content)
    try:
        return {"profile_picture": content["photos"][0]["src"]["original"]}
    except (KeyError, IndexError):
        return {"profile_picture": None}

def get_photo2(student):
    headers = {"Authorization": PEXELS_API_KEY}
    params = {
        "per_page": 1,
        "query": f"{student}",
    }
    url = "https://api.pexels.com/v1/search"
    response = requests.get(url, params=params, headers=headers)
    content = json.loads(response.content)
    try:
        return {"profile_picture": content["photos"][0]["src"]["original"]}
    except (KeyError, IndexError):
        return {"profile_picture": None}
