from django.shortcuts import render
from rest_framework import viewsets
from .models import PatientDetails
from .serializer import PatientDetailsSerializer

# Create your views here.


class PatientDetailsViewSet(viewsets.ModelViewSet):
    queryset = PatientDetails.objects.all()
    serializer_class = PatientDetailsSerializer