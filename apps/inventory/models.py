from django.db import models
from apps.franchise.models import BaseModel
from apps.items.models import Items
from django.utils.timezone import now

class Inventory(BaseModel):
    item = models.ForeignKey(to=Items,on_delete=models.CASCADE,blank=False,related_name='inventory',verbose_name='Item')
    existing_quantity = models.IntegerField(blank=False,null=True,verbose_name='Cantidad Existente')
    committed_quantity = models.IntegerField(blank=False,null=True,verbose_name='Cantidad Comprometida')
    last_entry_date = models.DateField(default=now().date(),blank=False,null=True,verbose_name='Fecha Ultima Entrada')
    last_output_date = models.DateField(default=now().date(),blank=True,null=True,verbose_name='Fecha Ultima Salida')
