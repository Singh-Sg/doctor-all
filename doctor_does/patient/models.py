from django.db import models

class PatientDetails(models.Model):
    APPOINTMENT_CHOICES = [
        ("in_clinic", "In Clinic"),
        ("video", "Video"),
        ("audio", "Audio"),
    ]

    name = models.CharField(max_length=255)
    mobile_number = models.CharField(max_length=10)
    appointment_type = models.CharField(
        max_length=20,
        choices=APPOINTMENT_CHOICES,
        default='in_clinic'
    )
    appointment_time = models.TimeField(help_text='Format: HH:MM')

    def __str__(self):
        return self.name