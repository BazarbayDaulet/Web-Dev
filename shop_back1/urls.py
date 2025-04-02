# shop_back/urls.py
from django.contrib import admin
from django.urls import path, include # Добавьте include

urlpatterns = [
    path('admin/', admin.site.urls),
    # Подключаем URL-адреса из приложения api с префиксом /api/
    path('api/', include('api.urls')),
]