from common.json import ModelEncoder

from .models import Yogi, Beholder, Guru


class YogiEncoder(ModelEncoder):
    model = Yogi
    properties = [
        "id",
        "name",
    ]


class BeholderEncoder(ModelEncoder):
    model = Beholder
    properties = [
        "id",
        "name",
    ]


class GuruEncoder(ModelEncoder):
    model = Guru
    properties = [
        "id",
        "name",
    ]

