import axios from 'axios';
const API_URL = 'http://tovar.localhost:8000/shop/'; //TODO: make generic for all tenants

export default class Shop{

    getProducts() {
        const url = `${API_URL}api/get-products`;
        return axios.get(url).then(response => response.data);
    }  
    getProductsByCategory(category_slug){
        const url = `${API_URL}api/get-products-by-category/${category_slug}`;
        return axios.get(url).then(response => response.data);
    }
    getProduct(product_id, product_slug) {
        const url = `${API_URL}api/get-product/${product_id}/${product_slug}`;
        return axios.get(url).then(response => response.data);
    }
}