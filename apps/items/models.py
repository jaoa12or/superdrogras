from django.db import models
from apps.franchise.models import BaseModel
from django.urls import reverse


class Category(models.Model):
    name = models.CharField(max_length=200,
                            db_index=True)
    slug = models.SlugField(max_length=200,
                            unique=True)

    class Meta:
        ordering = ('name',)
        verbose_name = 'category'
        verbose_name_plural = 'categories'

    def __str__(self):
        return self.name

    def get_absolute_url(self):
            return reverse('shop:product_list_by_category',
                           args=[self.slug])


class Product(BaseModel):
    category = models.ForeignKey(Category, null=True, related_name='products', on_delete=models.CASCADE)
    id_product = models.CharField(max_length=50,blank=False,null=True,verbose_name='ID producto')
    laboratory = models.CharField(max_length=150,blank=False,null=True,verbose_name='Laboratorio')
    presentation = models.CharField(max_length=150,blank=False,null=True,verbose_name='Presentación')
    medical_name = models.CharField(max_length=250,blank=False,null=True,verbose_name='Nombre Medico')
    quantity = models.FloatField(default=0,blank=False,null=True,verbose_name='Cantidad')
    measure_unity = models.CharField(max_length=50,blank=False,null=True,verbose_name='Unidad Medida')
    description = models.CharField(max_length=250,blank=False,null=True,verbose_name='Descripción')
    reference = models.CharField(max_length=150,blank=False,null=True,verbose_name='Referencia')
    supplier = models.CharField(max_length=150,blank=False,null=True,verbose_name='Proveedor')
    slug = models.SlugField(max_length=200, db_index=True)
    image = models.ImageField(upload_to='products/%Y/%m/%d', blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    available = models.BooleanField(default=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ('medical_name',)
        index_together = (('id_product', 'slug'),)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
            return reverse('shop:product_detail',
                           args=[self.id, self.slug])
    
    def get_category(self):
        if(self.category):
            return self.category
        else:
            return "SIN CATEGORIA"

    def __str__(self):
        return self.reference