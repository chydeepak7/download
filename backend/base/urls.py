from django.urls import path
from . import views

urlpatterns = [
    # path('', views.test, name='test'),
    path('files/',views.get_files, name='files_list'),

]