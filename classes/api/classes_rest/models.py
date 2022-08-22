from django.db import models

# Create your models here.
class Class(models.Model):
    name = models.CharField(max_length=100)
    difficulty = models.CharField()

    manufacturer = models.ForeignKey(
        Manufacturer,
        related_name="models",
        on_delete=models.CASCADE,
    )

    def get_api_url(self):
        return reverse("api_vehicle_model", kwargs={"pk": self.id})
