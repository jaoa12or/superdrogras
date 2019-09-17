from django.http import HttpResponse, JsonResponse
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.conf import settings
from django.contrib import messages
from django.db import transaction
from django.shortcuts import render, redirect, get_object_or_404
from .forms import FranchiseForm, UpdateFranchiseForm
from .models import Franchise, Domain
from .serializers import FranchiseSerializer
from rest_framework import viewsets
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

@api_view(['GET', 'POST'])
def franchise_list(request,format=None):
    if request.method == 'GET':
        if request.GET.get('subdomain',False):
            data = []
            try:
                franchise = Franchise.objects.get(schema_name=request.GET.get('subdomain'))
                data = [franchise]
            except Franchise.DoesNotExist:
                return Response(status=status.HTTP_404_NOT_FOUND)
            serializer = FranchiseSerializer(data,context={'request': request}, many=True)
            return Response({'data': serializer.data})
        else:
            data = []
            nextPage = 1
            previousPage = 1
            franchises = Franchise.objects.all()
            page = request.GET.get('page', 1)
            paginator = Paginator(franchises, 5)
            try:
                data = paginator.page(page)
            except PageNotAnInteger:
                data = paginator.page(1)
            except EmptyPage:
                data = paginator.page(paginator.num_pages)
            
            serializer = FranchiseSerializer(data,context={'request': request}, many=True)
            if data.has_next():
                nextPage = data.next_page_number()
            if data.has_previous():
                previousPage = data.previous_page_number()

            return Response({'data': serializer.data , 'count': paginator.count, 'numpages' : paginator.num_pages, 'nextlink': '/api/?page=' + str(nextPage), 'prevlink': '/api/?page=' + str(previousPage)})

    elif request.method == 'POST':
        serializer = FranchiseSerializer(data=request.data)
        if serializer.is_valid():
            try:
                """
                La operación se maneja como transaccional dado que involucra la creación de más de un objeto los cuales
                estan relacionados
                """
                with transaction.atomic():
                    franchise = serializer.save()
                    """
                    Se crea el dominio y se le asocia información alojada en el tenant. En este punto es que sucede la
                    creación del esquema del tenant en la base de datos
                    """
                    Domain.objects.create(domain='%s%s' % (franchise.schema_name, settings.DOMAIN), is_primary=True, tenant=franchise)
                    return Response(serializer.data, status=status.HTTP_201_CREATED)
            except Exception:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:    
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def franchise_detail(request, pk, format=None):
    """
    Retrieve, update or delete a code franchise.
    """
    try:
        franchise = Franchise.objects.get(pk=pk)
    except Franchise.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = FranchiseSerializer(franchise)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = FranchiseSerializer(franchise, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        franchise.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


            
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