from django.shortcuts import render, redirect, get_object_or_404
from django.db import connection
from django.http import HttpResponse
from django.utils.html import escape
from .forms import UserForm
from .models import TenantUser
from django.views.generic import ListView,CreateView,UpdateView,DeleteView,DetailView
from django.urls import reverse_lazy
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from apps.franchise.compat import get_public_schema_name, get_tenant_model

class InactiveError(Exception):
    pass

def users(request):
	users_list = TenantUser.objects.filter(is_active=True)
	page = request.GET.get('page', 1)
	paginator = Paginator(users_list, 2)

	try:
		users = paginator.page(page)
	except PageNotAnInteger:
		users = paginator.page(1)
	except EmptyPage:
		users = paginator.page(paginator.num_pages)

	return render(request, 'users.html', { 'users': users })

def create(request):
	form = UserForm(request.POST or None)
	if request.method == 'POST':
		if form.is_valid():
			TenantUser.objects.create_user(
				email="user@evilcorp.com", 
				password='password', is_active=True
			)
		return redirect('users:users')
	else:
		return render(request, 'user_form.html', { 'form': form })

class UserCreateView(CreateView):
    model = TenantUser
    form_class = UserForm
    template_name = 'user_form.html'
    success_url = reverse_lazy('users:users')

class UserUpdateView(UpdateView):
    model = TenantUser
    form_class = UserForm
    template_name = 'user_form.html'
    success_url = reverse_lazy('users:users')

def delete(request, pk):
	if request.method == 'POST':
		user = get_object_or_404(TenantUser, pk=pk)
		# return HttpResponse(escape(repr(user.id)))
		TenantUser.objects.delete_user(user)
		return redirect('users:users')
	else:
		return redirect('users:users')


