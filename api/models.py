from django.db import models
from django.contrib.auth.models import User
# --------------------------------------

class Category(models.Model):
    name = models.CharField(max_length=500)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }


class Product(models.Model):
    name = models.CharField(max_length=300)
    price = models.FloatField(default=0)
    description = models.TextField()
    image = models.CharField(max_length=1000)
    sale = models.BooleanField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products')


    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'image': self.image,
            'sale': self.sale
        }



class MyManager(models.Manager):
    def get_users_orders(self, user):
        return self.filter(user=user)


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='orders')
    items = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='items')
    objects = MyManager()

    def __str__(self):
        return self.items.name

    def to_json(self):
        return{
            'id': self.id,
            'username': self.user,
            'items': self.items
        }