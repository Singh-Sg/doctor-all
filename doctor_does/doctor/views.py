from rest_framework.views import APIView
from rest_framework.response import Response
from .models import *
from rest_framework import status
from rest_framework import generics
from .serializer import (
    RegisterSerializer,
    UserSerializer,
    DoctorSerializer,
    TreatmentsSerializer,
    DoctorTreatmentsSerializer,
    DoctorBlogSerializer
)

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
            serializer = self.serializer_class(
                obj,
                data=request.data,
                partial=True
            )
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)

        return Response(
            {"error": "Object not found"},
            status=status.HTTP_404_NOT_FOUND
        )


class TreatmentAPI(APIView):
    serializer_class = TreatmentsSerializer

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
            serializer = TreatmentsSerializer(
                obj, data=request.data, partial=True)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)

        return Response(
            {"error": "Object not found"},
            status=status.HTTP_404_NOT_FOUND
        )


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
            serializer = self.serializer_class(
                obj, data=request.data, partial=True)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)

        return Response(
            {"error": "Object not found"},
            status=status.HTTP_404_NOT_FOUND
        )


class DoctorBlogApi(APIView):
    def get(self, request, id=None):
        try:
            if id is not None:
                doctor_blog_obj = get_object_or_404(DoctorBlog, id=id)
                doctor_blog_serializer = DoctorBlogSerializer(doctor_blog_obj)
                return Response(doctor_blog_serializer.data, status=status.HTTP_200_OK)
            doctor_blog = DoctorBlog.objects.all()
            doctor_blog_serializer = DoctorBlogSerializer(
                doctor_blog, many=True)
            return Response(doctor_blog_serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response(
                {"error": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

    def post(self, request, format=None):
        try:
            doctor_blog_serializer = DoctorBlogSerializer(data=request.data)
            doctor_blog_serializer.is_valid(raise_exception=True)
            doctor_blog_serializer.save()
            return Response(doctor_blog_serializer.data, status=status.HTTP_201_CREATED)
        except doctor_blog_serializer.ValidationError as e:
            return Response(
                {"error": str(e)},
                status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

    def patch(self, request, id=None):
        doctor_blog_obj = get_object_or_404(DoctorBlog, id=id)
        if doctor_blog_obj:
            serializer = DoctorBlogSerializer(
                doctor_blog_obj, data=request.data, partial=True)
            try:
                if serializer.is_valid(raise_exception=True):
                    serializer.save()
                    return Response(serializer.data, status=status.HTTP_200_OK)
            except serializer.ValidationError as e:
                return Response(
                    {"error": str(e)},
                    status=status.HTTP_400_BAD_REQUEST
                )
        return Response(
            {"error": "Object not found"},
            status=status.HTTP_404_NOT_FOUND
        )

    def delete(self, request, id=None):
        doctor_blog_obj = get_object_or_404(DoctorBlog, id=id)
        if doctor_blog_obj:
            doctor_blog_obj.delete()
            return Response({"message": "Object deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
        return Response(
            {"error": "Object not found"},
            status=status.HTTP_404_NOT_FOUND
        )
