from django.urls import path
from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt import views as jwt_views
from .views import DoctorAPI, RegisterApi, DoctorTreatmentAPI, DoctorBlogApi
from django.conf import settings
from django.conf.urls.static import static

from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'blog', DoctorBlogApi, basename='blog')
urlpatterns = router.urls

urlpatterns += [
    path("", DoctorAPI.as_view(), name="doctors"),

    path("token/", jwt_views.TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("token/refresh/", jwt_views.TokenRefreshView.as_view(), name="token_refresh"),
    
    path("register/", RegisterApi.as_view(), name="register_user"),
    
    path("/<int:id>", DoctorAPI.as_view(), name="doctors_obj"),
    path("treatment/", DoctorTreatmentAPI.as_view(), name="doctor_treatment"),
    path(
        "treatment/<int:id>/", DoctorTreatmentAPI.as_view(), name="doctor_treatment_obj"
    ),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
