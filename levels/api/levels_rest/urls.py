from django.urls import path

from .views import (
    api_beholder,
    api_beholders,
    api_yogi,
    api_yogis,
    api_guru,
    api_gurus,
)

urlpatterns = [
    path(
        "beholders/",
        api_beholders,
        name="api_beholders",
    ),
    path(
        "beholder/<int:pk>/",
        api_beholder,
        name="api_beholder",
    ),
    path(
        "yogis/",
        api_yogis,
        name="api_yogis",
    ),
    path(
        "yogi/<int:pk>/",
        api_yogi,
        name="api_yogi",
    ),
    path(
        "gurus/",
        api_gurus,
        name="api_gurus",
    ),
    path(
        "guru/<int:pk>/",
        api_guru,
        name="api_guru",
    ),
]

