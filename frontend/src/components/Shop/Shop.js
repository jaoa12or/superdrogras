import axios from 'axios';
import { API_URL } from '../../store/constant';

let PATH = 'shop/api/';

export default class Shop{

    getProducts() {
        const url = `${API_URL}${PATH}product-list`;
        return axios.get(url).then(response => response.data);
    }

    getProductsByURL(url) {
        return axios.get(url).then(response => response.data);
    }

    getProduct(product_id, product_slug) {
        const url = `${API_URL}${PATH}get-product/${product_id}/${product_slug}`;
        return axios.get(url).then(response => response.data);
    }
}