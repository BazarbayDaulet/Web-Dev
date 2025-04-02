# api/models.py
from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=255, verbose_name="Название") # Добавим verbose_name для читаемости в админке

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Категория" # Название модели в единственном числе
        verbose_name_plural = "Категории" # Название модели во множественном числе


class Product(models.Model):
    name = models.CharField(max_length=255, verbose_name="Название")
    price = models.FloatField(verbose_name="Цена")
    description = models.TextField(verbose_name="Описание")
    count = models.IntegerField(verbose_name="Количество")
    is_active = models.BooleanField(default=True, verbose_name="Активен")
    # Добавляем ForeignKey к Category.
    # 'on_delete=models.CASCADE' означает, что при удалении категории все связанные с ней продукты также будут удалены.
    # 'related_name' позволяет обращаться к продуктам из категории: category.products.all()
    category = models.ForeignKey(Category, related_name='products', on_delete=models.CASCADE, verbose_name="Категория")

    def __str__(self):
        return f"{self.name} ({self.category.name})"

    class Meta:
        verbose_name = "Продукт"
        verbose_name_plural = "Продукты"