from django.shortcuts import render, redirect
from django.db import connection
from django.http import HttpResponse
from django.utils.html import escape
from .forms import UserForm
from .models import TenantUser
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from apps.franchise.compat import get_public_schema_name, get_tenant_model

def users(request):
	users_list = TenantUser.objects.all()
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
			user = TenantUser.objects.create_user(
				email = request.POST.get('email'),
				password = request.POST.get('password'),
				is_active = True,
				first_name_1 = request.POST.get('first_name_1'),
				first_name_2 = request.POST.get('first_name_2'),
				last_name_1 = request.POST.get('last_name_1'),
				last_name_2 = request.POST.get('last_name_2'),
				phone = request.POST.get('phone'),
				phone2 = request.POST.get('phone2'),
				address = request.POST.get('address'),
			)
			return redirect('users:users')
		return render(request, 'create.html', {'form': form})
	else:
		return render(request, 'create.html', {'form': form})

