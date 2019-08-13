import axios from 'axios';
import { API_URL } from '../../store/constant';

let PATH = 'cart/api/';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.withCredentials = true

export default class Shop{

    getCart() {
        const url = `${API_URL}${PATH}cart-list`;
        return axios.get(url).then(response => response.data);
    }
    addProductToCart(product) {
        const url = `${API_URL}${PATH}add-product-to-cart`;
        return axios.post(url, product).then(response => response.data);
    }
}