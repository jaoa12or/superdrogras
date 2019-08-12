"""
Django settings for superdrogras project.

Generated by 'django-admin startproject' using Django 2.1.2.

For more information on this file, see
https://docs.djangoproject.com/en/2.1/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/2.1/ref/settings/
"""

import os

from json import loads
json_file = open('superdrogras/secrets.json').read()
JSON_CONFIG_FILE = loads(json_file)

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'sx#8cu6@%&%6uj^%3pv)^-+m1ax!ule%ca$ew*ggf9bk5d81(^'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['.localhost', '.127.0.0.1']


# Application definition
SHARED_APPS = [
    'apps.users',
    'django_tenants',
    'apps.franchise',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'corsheaders',
    'rest_framework',
    'bootstrap4',
]

TENANT_APPS = [
    'apps.users',
    'apps.roles',
    'apps.items',
    'apps.inventory',
    'apps.cart',
    'apps.orders',
    'apps.shop',
    'django.contrib.contenttypes',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'corsheaders',
    'rest_framework',
    'bootstrap4',
]

INSTALLED_APPS = list(SHARED_APPS) + [app for app in TENANT_APPS if app not in SHARED_APPS]

TENANT_MODEL = "franchise.Franchise" # Modelo que hereda de TenantMixin
TENANT_DOMAIN_MODEL = "franchise.Domain"  # Modelo que hereda de DomainMixin
AUTH_USER_MODEL = "users.User"
LOGIN_URL = "/login"
LOGIN_REDIRECT_URL="/"
MIDDLEWARE = [
    'django_tenants.middleware.main.TenantMainMiddleware', # Necesario que este en el top de los MIDDLEWARE

    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]


ROOT_URLCONF = 'superdrogras.tenant_urls'
# Con esta línea se tiene una separación de las urls del tenant public  y de las urls para los tenants
PUBLIC_SCHEMA_URLCONF = 'superdrogras.urls'


TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'apps.cart.context_processors.cart',
            ],
        },
    },
]

WSGI_APPLICATION = 'superdrogras.wsgi.application'


# Database
# https://docs.djangoproject.com/en/2.1/ref/settings/#databases

DATABASES = JSON_CONFIG_FILE['DATABASES']

DATABASE_ROUTERS = (
    'django_tenants.routers.TenantSyncRouter',
)

DOMAIN = '.localhost'

# Password validation
# https://docs.djangoproject.com/en/2.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    # {
    #     'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    # },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
        'OPTIONS': {
            'min_length': 3,
        }
    },
    # {
    #     'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    # },
    # {
    #     'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    # },
]


# Internationalization
# https://docs.djangoproject.com/en/2.1/topics/i18n/

LANGUAGE_CODE = 'es'

TIME_ZONE = 'America/Bogota'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/2.1/howto/static-files/

STATIC_URL = '/static/'

REST_FRAMEWORK  = {
    ' DEFAULT_PERMISSION_CLASSES ' : (
        ' rest_framework.permissions.IsAuthenticated ' ,
    ),
    ' DEFAULT_AUTHENTICATION_CLASSES ' : (
        ' rest_framework_jwt.authentication.JSONWebTokenAuthentication ' ,
        ' rest_framework.authentication.SessionAuthentication ' ,
        ' rest_framework.authentication.BasicAuthentication ' ,
    ),
}

JWT_AUTH = {
    'JWT_RESPONSE_PAYLOAD_HANDLER': 'apps.users.utils.my_jwt_response_handler'
}

# we whitelist localhost:3000 because that's where frontend will be served
CORS_ORIGIN_WHITELIST = (
    'http://localhost:3000',
 )

CART_SESSION_ID = 'cart'
EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'