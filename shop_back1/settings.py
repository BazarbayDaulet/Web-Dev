# shop_back/settings.py
import os # Убедитесь, что 'os' импортирован в начале файла
from pathlib import Path

# Определяем BASE_DIR как корневую директорию проекта
BASE_DIR = Path(__file__).resolve().parent.parent
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    # Сторонние приложения
    'rest_framework',
    # Ваши приложения
    'api',
]
DEBUG = True
# ... (оставьте остальную часть файла настроек)

# Настройки для Django Rest Framework (необязательно, но полезно)
REST_FRAMEWORK = {
    # Используем JSON Renderer по умолчанию и Browsable API для удобства разработки
    'DEFAULT_RENDERER_CLASSES': [
        'rest_framework.renderers.JSONRenderer',
        'rest_framework.renderers.BrowsableAPIRenderer', # Удобный интерфейс в браузере
    ],
    # Можно добавить пагинацию
    # 'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    # 'PAGE_SIZE': 10
}

# Настройки языка и времени (пример)
LANGUAGE_CODE = 'ru-ru' # Устанавливаем русский язык

TIME_ZONE = 'Asia/Almaty' # Устанавливаем ваш часовой пояс

USE_I18N = True
STATIC_URL = '/static/'
USE_L10N = True # Для форматирования дат/чисел согласно локали
ROOT_URLCONF = 'shop_back1.urls'
USE_TZ = True
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [], # Можно добавить пути к глобальным шаблонам проекта здесь
        'APP_DIRS': True, # Искать шаблоны внутри директорий приложений
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]
SECRET_KEY = 'bazarbay16daulet' # Замените на ваш сгенерированный ключ
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    # Добавьте SessionMiddleware ПЕРЕД AuthenticationMiddleware
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    # Добавьте AuthenticationMiddleware
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    # Добавьте MessageMiddleware
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3', # Указываем, что используем SQLite
        'NAME': BASE_DIR / 'db.sqlite3',       # Имя файла базы данных (будет создан в корне проекта)
    }
}