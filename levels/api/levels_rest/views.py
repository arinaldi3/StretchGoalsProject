from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json


# Create your views here.

from .encoders import (
    BeholderEncoder,
    YogiEncoder,
    GuruEncoder,
)
from .models import Beholder, Yogi, Guru


@require_http_methods(["GET", "POST"])
def api_beholders(request):
    if request.method == "GET":
        levels = Beholder.objects.all()
        return JsonResponse(
            {"levels": levels},
            encoder=BeholderEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
            level_id = content["beholder_id"]
            level = Beholder.objects.get(pk=level_id)
            content["level"] = level
            level = Beholder.objects.create(**content)
            return JsonResponse(
                level,
                encoder=BeholderEncoder
                    ,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create the Beholder"}
            )
            response.status_code = 400
            return response


@require_http_methods(["DELETE", "GET", "PUT"])
def api_beholder(request):
    if request.method == "GET":
        try:
            level = Beholder.objects.get(id=id)
            return JsonResponse(
                level,
                encoder=BeholderEncoder,
                safe=False
            )
        except Beholder.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    elif request.method == "DELETE":
        try:
            level = Beholder.objects.get(id=id)
            level.delete()
            return JsonResponse(
                level,
                encoder=BeholderEncoder,
                safe=False,
            )
        except Beholder.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})
    else: # PUT
        try:
            content = json.loads(request.body)
            level = Beholder.objects.get(id=id)

            props = ["requirements", "badge"]
            for prop in props:
                if prop in content:
                    setattr(level, prop, content[prop])
            level.save()
            return JsonResponse(
                level,
                encoder=BeholderEncoder,
                safe=False,
            )
        except Beholder.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response


@require_http_methods(["GET", "POST"])
def api_yogis(request):
    if request.method == "GET":
        yogis = Yogi.objects.all()
        return JsonResponse(
            {"yogis": yogis},
            encoder=YogiEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
            yogi = Yogi.objects.create(**content)
            return JsonResponse(
                yogi,
                encoder=YogiEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create the yogi"}
            )
            response.status_code = 400
            return response


@require_http_methods(["DELETE", "GET", "PUT"])
def api_yogi(request, pk):
    if request.method == "GET":
        try:
            yogi = Yogi.objects.get(id=pk)
            return JsonResponse(
                yogi,
                encoder=YogiEncoder,
                safe=False
            )
        except Yogi.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    elif request.method == "DELETE":
        try:
            yogi = Yogi.objects.get(id=pk)
            yogi.delete()
            return JsonResponse(
                yogi,
                encoder=YogiEncoder,
                safe=False,
            )
        except Yogi.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})
    else: # PUT
        try:
            content = json.loads(request.body)
            yogi = Yogi.objects.get(id=pk)

            props = ["name"]
            for prop in props:
                if prop in content:
                    setattr(yogi, prop, content[prop])
            yogi.save()
            return JsonResponse(
                yogi,
                encoder=YogiEncoder,
                safe=False,
            )
        except Yogi.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response


@require_http_methods(["GET", "POST"])
def api_gurus(request):
    if request.method == "GET":
        gurus = Guru.objects.all()
        return JsonResponse(
            {"gurus": gurus},
            encoder=GuruEncoder
        )
    else:
        try:
            content = json.loads(request.body)
            guru_id = content["guru_id"]
            guru = Guru.objects.get(id=guru_id)
            content["guru"] = guru
            # photo = get_photo(content["yogi"], content["name"])
            # content.update(photo)
            Guru = Guru.objects.create(**content)
            return JsonResponse(
                Guru,
                encoder=GuruEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create the guru"}
            )
            response.status_code = 400
            return response


@require_http_methods(["DELETE", "GET", "PUT"])
def api_guru(request, pk):
    if request.method == "GET":
        try:
            guru = Guru.objects.get(id=pk)
            return JsonResponse(
                guru,
                encoder=GuruEncoder,
                safe=False
            )
        except Guru.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    elif request.method == "DELETE":
        try:
            guru = Guru.objects.get(id=pk)
            guru.delete()
            return JsonResponse(
                guru,
                encoder=GuruEncoder,
                safe=False,
            )
        except Guru.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})
    else: # PUT
        try:
            content = json.loads(request.body)
            guru = Guru.objects.get(id=pk)
            props = ["requirements", "badge"]
            for prop in props:
                if prop in content:
                    setattr(guru, prop, content[prop])
            guru.save()
            return JsonResponse(
                guru,
                encoder=GuruEncoder,
                safe=False,
            )
        except Guru.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
