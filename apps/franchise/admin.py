from django.contrib import admin

# Register your models here.
from .models import Franchise # add this

class FranchiseAdmin(admin.ModelAdmin):  # add this
  list_display = ('schema_name','name', 'description', 'address','phone') # add this

# Register your models here.
admin.site.register(Franchise, FranchiseAdmin) # add this