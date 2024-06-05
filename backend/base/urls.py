from django.urls import path
from . import views


urlpatterns = [
    # path('', views.test, name='test'),
    path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('files/',views.get_files, name='files_list'),

]