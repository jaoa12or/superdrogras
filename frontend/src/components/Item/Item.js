import axios from 'axios';
import { API_URL } from '../../store/constant';

let PATH = 'api/item/';

export default class Item {

    getItems() {
        const url = `${API_URL + PATH}`;
        console.log(url);
        return axios.get(url)
        .then(response => {
            return response.data;
        })
        .catch(function (error) {
            // handle error
            window.location.href = "/";
        });

    }
    getItemByURL(link) {
        const url = `${API_URL + PATH}${link}`;
        return axios.get(url).then(response => response.data)
        .catch(function (error) {
            // handle error
            window.location.href = "/";
        });
    }
    getItem(pk) {
        const url = `${API_URL + PATH}${pk}`;
        return axios.get(url).then(response => response.data)
        .catch(function (error) {
            // handle error
            window.location.href = "/";
        });
    }
    deleteItem(inventory) {
        const url = `${API_URL + PATH}${inventory.pk}`;
        return axios.delete(url)
        .catch(function (error) {
            // handle error
            window.location.href = "/";
        });
    }
    createItem(inventory) {
        const url = `${API_URL + PATH}`;
        return axios.post(url, inventory)
        .catch(function (error) {
            // handle error
            window.location.href = "/";
        });;
    }
    updateItem(inventory) {
        const url = `${API_URL + PATH}${inventory.pk}/`;
        return axios.put(url, inventory)
        .catch(function (error) {
            // handle error
            window.location.href = "/";
        });;
    }
}