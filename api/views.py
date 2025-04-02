# api/views.py
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer, CategoryWithProductsSerializer

# --- Представления для Продуктов ---
class ProductList(generics.ListCreateAPIView): # Используем ListCreateAPIView для получения списка и создания
    """
    API эндпоинт для получения списка всех активных продуктов или создания нового продукта.
    """
    queryset = Product.objects.filter(is_active=True) # Показываем только активные продукты в общем списке
    serializer_class = ProductSerializer

class ProductDetail(generics.RetrieveUpdateDestroyAPIView): # Используем RetrieveUpdateDestroyAPIView для получения, обновления, удаления
    """
    API эндпоинт для получения, обновления или удаления одного продукта по id.
    """
    queryset = Product.objects.all() # Для получения конкретного продукта нужен доступ ко всем
    serializer_class = ProductSerializer
    lookup_field = 'id' # Явно указываем поле для поиска (хотя pk/id используется по умолчанию)

# --- Представления для Категорий ---
class CategoryList(generics.ListCreateAPIView): # Используем ListCreateAPIView
    """
    API эндпоинт для получения списка всех категорий или создания новой категории.
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryDetail(generics.RetrieveUpdateDestroyAPIView): # Используем RetrieveUpdateDestroyAPIView
    """
    API эндпоинт для получения, обновления или удаления одной категории по id.
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer # Простой сериализатор для отдельной категории
    lookup_field = 'id'

class CategoryProductsList(generics.RetrieveAPIView): # Используем RetrieveAPIView только для чтения
    """
    API эндпоинт, который возвращает детали категории вместе со списком ее активных продуктов.
    Использует CategoryWithProductsSerializer для включения вложенных данных продуктов.
    """
    queryset = Category.objects.all()
    serializer_class = CategoryWithProductsSerializer # Используем сериализатор с продуктами
    lookup_field = 'id'

    # Можно переопределить get_queryset или get_serializer_context, если нужна фильтрация продуктов (например, только активные)
    # Но CategoryWithProductsSerializer уже использует ProductSerializer, который может фильтровать или нет
    # Чтобы показывать только активные продукты в этом эндпоинте, можно настроить сериализатор или переопределить метод retrieve:

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object() # Получаем категорию
        # Фильтруем продукты этой категории, чтобы были только активные
        active_products = instance.products.filter(is_active=True)
        # Сериализуем категорию с отфильтрованными продуктами
        serializer = self.get_serializer(instance)
        # Создаем копию данных сериализатора, чтобы изменить поле 'products'
        data = serializer.data
        # Сериализуем только активные продукты для ответа
        product_serializer = ProductSerializer(active_products, many=True, context=self.get_serializer_context())
        data['products'] = product_serializer.data
        return Response(data)

# Альтернатива с использованием APIView для CategoryProductsList (дает больше явного контроля)
# class CategoryProductsList(APIView):
#     """
#     API эндпоинт, который возвращает список активных продуктов для указанной категории.
#     """
#     def get(self, request, id, format=None):
#         try:
#             category = Category.objects.get(pk=id)
#         except Category.DoesNotExist:
#             return Response(status=404) # Не найдено
#
#         products = Product.objects.filter(category=category, is_active=True) # Фильтруем по категории и активности
#         serializer = ProductSerializer(products, many=True)
#         return Response(serializer.data)