from django.conf import settings
from django.contrib import messages
from django.db import transaction
from django.shortcuts import render, redirect, get_object_or_404
from .forms import FranchiseForm, UpdateFranchiseForm
from .models import Franchise, Domain



def home(request):
    return render(request, 'base.html', {})


def create_franchise(request):
    """
    Permite registrar una franquicia (tenant) en el sistema
    :param request:
    :return:
    """
    domains = Domain.objects.exclude(tenant__schema_name='public').select_related('tenant')
    form = FranchiseForm()
    if request.method == 'POST':
        form = FranchiseForm(request.POST)
        if form.is_valid():
            try:
                """
                La operación se maneja como transaccional dado que involucra la creación de más de un objeto los cuales
                estan relacionados
                """
                with transaction.atomic():
                    franchise = form.save()
                    """
                    Se crea el dominio y se le asocia información alojada en el tenant. En este punto es que sucede la
                    creación del esquema del tenant en la base de datos
                    """
                    Domain.objects.create(domain='%s%s' % (franchise.schema_name, settings.DOMAIN), is_primary=True, tenant=franchise)
                    messages.success(request, "Se ha registrado correctamente la franquicia")
            except Exception:
                messages.error(request, 'Ha ocurrido un error durante la creación del franquicia, se aborto la operación')
            return redirect('franchise:create_franchise')
        else:
            messages.error(request, "Por favor verificar los campos en rojo")

    return render(request, 'create_franchise.html', {'form': form, 'domains': domains})


def update_franchise(request, id_franchise):
    """
    Permite modificar parte de la información del tenant
    :param request:
    :param id_cliente:
    :return:
    """
    franchise = get_object_or_404(Franchise, id=id_franchise)
    domains = Domain.objects.exclude(tenant__schema_name='public').select_related('tenant')
    form = UpdateFranchiseForm(instance=franchise)
    if request.method == 'POST':
        form = UpdateFranchiseForm(request.POST, instance=franchise)
        if form.is_valid():
            form.save()
            messages.success(request, "Se ha modificado correctamente la franquicia")
            return redirect('franchise:create_franchise')
        else:
            messages.error(request, "Por favor verificar los campos en rojo")

    return render(request, 'create_franchise.html', {'form': form, 'domains': domains})