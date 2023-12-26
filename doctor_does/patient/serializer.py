from rest_framework import serializers
from .models import *


# Register serializer


class PatientDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = PatientDetails
        fields = "__all__"
