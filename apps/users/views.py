from django.shortcuts import render
from django.http import HttpResponse
from django.utils.html import escape
from .forms import UserForm
from .models import TenantUser

def users(request):
	return render(request, 'users.html', {})

def create(request):
	form = UserForm(request.POST or None)
	if request.method == 'POST':
		if form.is_valid():
			user_fields = []
			user_fields['email'] = request.POST.get('email')
			user_fields['first_name_1'] = request.POST.get('first_name')
			user_fields['first_name_2'] = request.POST.get('first_name_2')
			user_fields['last_name_1'] = request.POST.get('last_name_1')
			user_fields['last_name_2'] = request.POST.get('last_name_2')
			user_fields['phone'] = request.POST.get('phone')
			user_fields['phone2'] = request.POST.get('phone2')
			user_fields['address'] = request.POST.get('address')
			user_fields['password'] = request.POST.get('password')
			user_fields['is_active'] = request.POST.get('is_active')
			user = TenantUser.objects.create_user1(user_fields)

			# user = TenantUser.objects.create_user(email=email, password=password, is_active=True, request.POST.all())
			return HttpResponse(escape(repr(form)))
		return render(request, 'users.html', {'form': form})
	else:
		return render(request, 'users.html', {'form': form})
