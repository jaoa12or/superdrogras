"""superdrogras URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path, include
<<<<<<< HEAD
from django.conf import settings
=======
>>>>>>> 0c1ac0bd646ef77d6831688201c5d9b456514b4f
from apps.franchise.views import home
from django.conf.urls.static import static

urlpatterns = [
    path('', home, name='home'),
    path('franchise/', include('apps.franchise.urls', namespace='franchise')),
<<<<<<< HEAD
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
=======
    path('users/', include('apps.users.urls', namespace='users')),
]
>>>>>>> 0c1ac0bd646ef77d6831688201c5d9b456514b4f
