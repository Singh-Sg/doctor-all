from rest_framework.views import APIView
from rest_framework.response import Response
from .models import *
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics
from rest_framework import viewsets
from .serializer import (
    RegisterSerializer,
    UserSerializer,
    DoctorSerializer,
    TreatmentsSerializer,
    DoctorTreatmentsSerializer,
    DoctorBlogSerializer,
)
from django.views.decorators.csrf import csrf_exempt

from django.shortcuts import get_object_or_404
import logging
from .logger import create_logger

logger = logging.getLogger(__name__)


# Register API


class RegisterApi(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response(
            {
                "user": UserSerializer(user).data,
                "message": "User Created Successfully.",
            },
            status=status.HTTP_201_CREATED,
        )


class DoctorAPI(APIView):
    serializer_class = DoctorSerializer

    def get(self, request, id=None):
        if id is not None:
            obj = get_object_or_404(Doctor, id=id)
            serializer = self.serializer_class(obj)
            return Response(serializer.data, status=status.HTTP_200_OK)

        queryset = Doctor.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

    def patch(self, request, id):
        obj = get_object_or_404(Doctor, id=id)
        if obj:
            serializer = self.serializer_class(obj, data=request.data, partial=True)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)

        return Response({"error": "Object not found"}, status=status.HTTP_404_NOT_FOUND)


class TreatmentAPI(APIView):
    serializer_class = TreatmentsSerializer
    permission_classes = [IsAuthenticated]

    def get(self, request, id=None):
        if id is not None:
            obj = get_object_or_404(Treatments, id=id)
            serializer = self.serializer_class(obj)
            return Response(serializer.data, status=status.HTTP_200_OK)

        queryset = Treatments.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        # Create a new logger for each post request
        logger = create_logger(
            f'post_log_{kwargs.get("id", "default")}.log',
            f'post_logger_{kwargs.get("id", "default")}',
        )

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()

            # Use the logger to log information
            logger.info("New treatment record created.")

            return Response(serializer.data, status=status.HTTP_201_CREATED)

    def patch(self, request, id):
        obj = get_object_or_404(Treatments, id=id)
        if obj:
            serializer = TreatmentsSerializer(obj, data=request.data, partial=True)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)

        return Response({"error": "Object not found"}, status=status.HTTP_404_NOT_FOUND)


class DoctorTreatmentAPI(APIView):
    serializer_class = DoctorTreatmentsSerializer

    def get(self, request, id=None):
        if id is not None:
            obj = get_object_or_404(DoctorTreatments, id=id)
            serializer = self.serializer_class(obj)
            return Response(serializer.data, status=status.HTTP_200_OK)

        queryset = DoctorTreatments.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

    def patch(self, request, id):
        obj = get_object_or_404(Doctor, id=id)
        if obj:
            serializer = self.serializer_class(obj, data=request.data, partial=True)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)

        return Response({"error": "Object not found"}, status=status.HTTP_404_NOT_FOUND)


class DoctorBlogApi(viewsets.ModelViewSet):
    queryset = DoctorBlog.objects.all()
    serializer_class = DoctorBlogSerializer
    # permission_classes = []
    permission_classes = [IsAuthenticated]

    def create(self, request, *args, **kwargs):
        user = request.user
        data = request.data.copy()
        data["doctor"] = user.doctor.id
        import pdb;pdb.set_trace()

        serializer = self.serializer_class(data=data, context={"author": user})
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)
