import axios from 'axios';
import { API_URL } from '../../store/constant';

let PATH = 'cart/api/';

export default class Shop{

    getCart() {
        const url = `${API_URL}${PATH}cart-list`;
        return axios.get(url).then(response => response.data);
    }
}