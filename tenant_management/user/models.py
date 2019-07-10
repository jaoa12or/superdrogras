from django.db import models
from django.contrib.auth.models import AbstractUser,Permission
from django.contrib.contenttypes.models import ContentType
from django.utils.timezone import now
from django_currentuser.db.models import CurrentUserField

class User(AbstractUser):
    def __str__(self):
        return self.email