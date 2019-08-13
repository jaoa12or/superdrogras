from django.shortcuts import render, redirect, get_object_or_404
from django.views.decorators.http import require_POST
from apps.items.models import Product
from .cart import Cart
from .forms import CartAddProductForm
from rest_framework.views import APIView
from rest_framework.response import Response
from apps.shop.serializers import ProductSerializer
import json

@require_POST
def cart_add(request, product_id):
    cart = Cart(request)
    product = get_object_or_404(Product, id=product_id)
    form = CartAddProductForm(request.POST)
    if form.is_valid():
        cd = form.cleaned_data
        cart.add(product=product,
                 quantity=cd['quantity'],
                 update_quantity=cd['update'])
    return redirect('cart:cart_detail')


def cart_remove(request, product_id):
    cart = Cart(request)
    product = get_object_or_404(Product, id=product_id)
    cart.remove(product)
    return redirect('cart:cart_detail')


def cart_detail(request):
    cart = Cart(request)
    for item in cart:
            item['update_quantity_form'] = CartAddProductForm(
                              initial={'quantity': item['quantity'],
                              'update': True})
    return render(request, 'cart/detail.html', {'cart': cart})


class CartAPI(APIView):
    def get(self, request, format=None):
        cart = Cart(request)
        products = []
        for item in cart:
            product_serializer = ProductSerializer(item['product'], context={'request': request}) # context for full image path
            product = {'product': product_serializer.data, 'quantity': item['quantity'],
                       'price': item['price'], 'total_price': item['total_price']}
            products.append(product)
        cart_dict = {'total_price': cart.get_total_price(), 'products': products}
        return Response(cart_dict)

    def post(self, request, format=None):
        product_dict = request.data
        product = get_object_or_404(Product, id=product_dict['pk'])
        print(request.session)
        cart = Cart(request)
        cart.add(product=product,
                 quantity=1,
                 update_quantity=1)
        return Response({"success": True})

