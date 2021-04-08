from api.models import Product, Category
from django.http.response import JsonResponse, HttpResponse


# Create your views here.
def products_list(request):
    products = Product.objects.all()
    products_json = [product.to_json() for product in products]
    return JsonResponse(products_json, safe=False)


def products_detail(request, product_id):
    try:
        product = Product.objects.get(id=product_id)
    except Exception as e:
        return JsonResponse({'message': str(e)}, status=400)
    return JsonResponse(product.to_json())


def categories_list(request):
    categories = Category.objects.all()
    categories_json = [category.to_json() for category in categories]
    return JsonResponse(categories_json, safe=False)


def categories_detail(request, category_id):
    try:
        category = Category.objects.get(id=category_id)
    except Exception as e:
        return JsonResponse({'message': str(e)}, status=400)
    return JsonResponse(category.to_json())


def empty_api(request):
    return HttpResponse('enter smt')
