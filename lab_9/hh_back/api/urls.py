from django.urls import path
from api.views import *

urlpatterns = [
    path('companies/', companies_list),
    path('companies/<int:id>/', company_detail),
    path('companies/<int:id>/vacancies/', company_vacancy),
    path('vacancies/', vacancies_list),
    path('vacancies/<int:id>/', vacancy_detail),
    path('vacancies/top_ten/', vacancy_top_ten),
    path('', empty_page)
]