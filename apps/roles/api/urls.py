from django.urls import path, include
from .views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', RoleView, base_name='users')
# urlpatterns = router.urls

urlpatterns = [
    path('permissions/', PermissionListView.as_view()),
	path('', include(router.urls)),
]