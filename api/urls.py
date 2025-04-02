# api/urls.py
from django.urls import path
from . import views

# Определяем имена для URL-шаблонов для удобства использования в Django (например, в reverse())
urlpatterns = [
    path('products/', views.ProductList.as_view(), name='product-list'),
    path('products/<int:id>/', views.ProductDetail.as_view(), name='product-detail'),
    path('categories/', views.CategoryList.as_view(), name='category-list'),
    path('categories/<int:id>/', views.CategoryDetail.as_view(), name='category-detail'),
    # URL для получения продуктов конкретной категории
    path('categories/<int:id>/products/', views.CategoryProductsList.as_view(), name='category-products-list'),
]