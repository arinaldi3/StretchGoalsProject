from json import JSONEncoder
from django.urls import NoReverseMatch
from django.db.models import QuerySet
from datetime import datetime
import decimal

class DateEncoder(JSONEncoder):
    def default(self, o):
        if isinstance(o, datetime):
            return o.isoformat()
        else:
            return super().default(o)


class QuerySetEncoder(JSONEncoder):
    def default(self, o):
        if isinstance(o, QuerySet):
            return list(o)
        else:
            return super().default(o)

class DecimalEncoder(JSONEncoder):
    def default(self, o):
        if isinstance(o, decimal.Decimal):
            return str(o)
        return super(DecimalEncoder, self).default(o)

class ModelEncoder(DateEncoder, QuerySetEncoder, JSONEncoder):
    encoders = {}

    def default(self, o):
        if isinstance(o, self.model):
            print("ModelEncoder")
            d = {}
            if hasattr(o, "get_api_url"):
                try:
                    d["href"] = o.get_api_url()
                except NoReverseMatch:
                    pass
            for property in self.properties:
                print("property", property)
                encoder = self.encoders.get(property)
                value = getattr(o, property)
                print("value", value)
                if hasattr(value, "all") and callable(value.all):
                    value = map(
                        encoder.default if encoder else lambda x: x,
                        list(value.all()),
                    )
                    print("Many-to-many value prelist", value)
                    value = list(value)
                    print("Many-to-many value postlist", value)
                elif encoder:
                    print("preencoder", value)
                    value = encoder.default(value)
                    print("postencoder", value)
                d[property] = value
                print(d)
            d.update(self.get_extra_data(o))
            return d
        else:
            return super().default(o)
            
    def get_extra_data(self, o):
        return {}