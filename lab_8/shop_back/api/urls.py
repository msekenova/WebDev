from django.contrib import admin
from django.urls import path
from django.shortcuts import render

from api.views import *

urlpatterns = [
    path('products/', products_list),
    path('products/<int:id>/', products_detail),
    path('categories/', categories_list),
    path('categories/<int:id>/', categories_detail),
    path('', empty_api)
]
