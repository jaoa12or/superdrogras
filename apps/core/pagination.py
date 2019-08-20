from rest_framework.pagination import PageNumberPagination
from apps.core.constants import PRODUCTS_BY_PAGE

class StandardResultsSetPagination(PageNumberPagination):
    page_size = PRODUCTS_BY_PAGE
    page_size_query_param = 'page_size'
    max_page_size = PRODUCTS_BY_PAGE
