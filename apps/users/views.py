from django.shortcuts import render, redirect, get_object_or_404
from django.db import connection
from django.http import HttpResponse
from django.utils.html import escape
from .forms import UserForm
from .models import User
from .serializers import UserSerializer
from django.contrib.auth.models import Group
from django.views.generic import ListView,CreateView,UpdateView,DeleteView,DetailView,TemplateView
from rest_framework import viewsets 
from django.urls import reverse_lazy
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from apps.franchise.compat import get_public_schema_name, get_tenant_model

class UserListView(ListView):
    model = User
    template_name = 'users.html'

def create(request):
    form = UserForm(request.POST or None, user=request.user)
    if request.method == 'POST':
        if form.is_valid():
            user = form.save()
            for g in request.POST.getlist('groups'):
                group = Group.objects.get(pk=g)
                user.groups.add(group)
            return redirect('users:users')
    return render(request, 'user_form.html', {'form':form})

def edit(request, pk):
    instance = get_object_or_404(User, pk=pk)
    form = UserForm(request.POST or None, instance=instance, user=request.user)
    if request.method == 'POST':
        if form.is_valid():
            user = form.save(commit=False)
            password = request.POST.get('password1', '')
            if password == '':
                user.password = instance.password
            user = form.save()
            user.groups.clear()
            for g in request.POST.getlist('groups'):
                group = Group.objects.get(pk=g)
                user.groups.add(group)
            return redirect('users:users')
    return render(request, 'user_form.html', {'form':form})

class UserCreateView(CreateView):
    model = User
    form_class = UserForm
    template_name = 'user_form.html'
    success_url = reverse_lazy('users:users')

class UserUpdateView(UpdateView):
    model = User
    form_class = UserForm
    template_name = 'user_form.html'
    success_url = reverse_lazy('users:users')

class UserDeleteView(DeleteView):
    model = User
    success_url = reverse_lazy('users:users')

class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    form_class = UserForm

    def get(self, request, format=None):
        return Response()

    def post(self, request):
        return Response()
		
def current_user(request):
    serializer = UserSerializer(request.user)
    return Response(serializer.data)

