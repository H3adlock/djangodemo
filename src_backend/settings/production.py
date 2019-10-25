from .base import *
import django_heroku

# Environment Vars
django_heroku.settings(locals())
DEBUG = False
SECRET_KEY = os.environ['SECRET_KEY']
TIME_ZONE = os.environ['TZ']
