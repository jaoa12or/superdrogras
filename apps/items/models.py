from django.db import models
from apps.franchise.models import BaseModel

class Items(BaseModel):
    id_item = models.CharField(max_length=50,blank=False,null=True,verbose_name='ID Item')
    laboratory = models.CharField(max_length=150,blank=False,null=True,verbose_name='Laboratorio')
    presentation = models.CharField(max_length=150,blank=False,null=True,verbose_name='Presentación')
    medical_name = models.CharField(max_length=250,blank=False,null=True,verbose_name='Nombre Medico')
    quantity = models.FloatField(default=0,blank=False,null=True,verbose_name='Cantidad')
    measure_unity = models.CharField(max_length=50,blank=False,null=True,verbose_name='Unidad Medida')
    description = models.CharField(max_length=250,blank=False,null=True,verbose_name='Descripción')
    reference = models.CharField(max_length=150,blank=False,null=True,verbose_name='Referencia')
    supplier = models.CharField(max_length=150,blank=False,null=True,verbose_name='Proveedor')

    def __str__(self):
        return self.reference