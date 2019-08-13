from django.db import models
from apps.franchise.models import BaseModel
from apps.items.models import Product
from django.utils.timezone import now

class Inventory(BaseModel):
    #item = models.ForeignKey(to=Product,on_delete=models.CASCADE,blank=False,related_name='inventory',verbose_name='Item')
    item = models.IntegerField(blank=False,null=True,verbose_name='Cantidad Existente')
    existing_quantity = models.IntegerField(blank=False,null=True,verbose_name='Cantidad Existente')
    committed_quantity = models.IntegerField(blank=False,null=True,verbose_name='Cantidad Comprometida')
    last_entry_date = models.DateField(blank=False,null=True,verbose_name='Fecha Ultima Entrada')
    last_output_date = models.DateField(blank=True,null=True,verbose_name='Fecha Ultima Salida')
