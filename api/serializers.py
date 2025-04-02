# api/serializers.py
from rest_framework import serializers
from .models import Product, Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name'] # 'id' - первичный ключ по умолчанию

class ProductSerializer(serializers.ModelSerializer):
    # Можно включить детали категории или только ее ID
    # category = CategorySerializer(read_only=True) # Включить полную информацию о категории (вложенный сериализатор)
    category_id = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all(), source='category', write_only=True) # Для записи ID
    category_name = serializers.CharField(source='category.name', read_only=True) # Для чтения названия категории

    class Meta:
        model = Product
        # Включаем и category_id для записи, и category_name для чтения
        fields = ['id', 'name', 'price', 'description', 'count', 'is_active', 'category_id', 'category_name']
        # Если использовать вложенный сериализатор для чтения:
        # fields = ['id', 'name', 'price', 'description', 'count', 'is_active', 'category']

class CategoryWithProductsSerializer(serializers.ModelSerializer):
    # Используем ProductSerializer для вложенного поля 'products'
    # many=True указывает, что это список продуктов
    # read_only=True означает, что это поле только для чтения (продукты не создаются/обновляются через этот эндпоинт категории)
    products = ProductSerializer(many=True, read_only=True)

    class Meta:
        model = Category
        fields = ['id', 'name', 'products'] # Включаем ID, имя категории и список ее продуктов