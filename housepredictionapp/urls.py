from django.urls import path
from .views import *

urlpatterns = [
    path('home', indexPage, name='home'),
    path('', predictionPage, name='prediction'),
    path('predictiontest', predictionTest, name='predictiontest')
]