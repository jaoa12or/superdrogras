from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from django.views.generic import ListView,CreateView,UpdateView,DeleteView,DetailView
from django.contrib.auth.models import Group
from.forms import RoleForm
from django.urls import reverse_lazy
from django.contrib.auth.mixins import PermissionRequiredMixin

#@method_decorator(login_required, name='dispatch')
class RoleListView(ListView):
	model = Group
	template_name = 'roles.html'

#@method_decorator(login_required, name='dispatch')
class RoleDetailView(DetailView):
	model = Group
	template_name = 'role_detail.html'

#@method_decorator(login_required, name='dispatch')
class RoleCreateView(CreateView):
	model = Group
	form_class = RoleForm
	template_name = 'role_form.html'
	success_url = reverse_lazy('roles:roles')

#@method_decorator(login_required, name='dispatch')
class RoleUpdateView(UpdateView):
	model = Group
	form_class = RoleForm
	template_name = 'role_form.html'
	success_url = reverse_lazy('roles:roles')

#@method_decorator(login_required, name='dispatch')
class RoleDeleteView(DeleteView):
	model = Group
    #permission_required = 'roles.delete_role'
	success_url = reverse_lazy('roles:roles')