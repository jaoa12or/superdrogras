import axios from 'axios';
import { API_URL } from '../../store/constant';

let PATH = 'api/inventory/';

export default class Inventory {

    getInventories() {
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
    getInventoryByURL(link) {
        const url = `${API_URL + PATH}${link}`;
        return axios.get(url).then(response => response.data)
        .catch(function (error) {
            // handle error
            window.location.href = "/";
        });
    }
    getInventory(pk) {
        const url = `${API_URL + PATH}${pk}`;
        return axios.get(url).then(response => response.data)
        .catch(function (error) {
            // handle error
            window.location.href = "/";
        });
    }
    deleteInventory(inventory) {
        const url = `${API_URL + PATH}${inventory.pk}`;
        return axios.delete(url)
        .catch(function (error) {
            // handle error
            window.location.href = "/";
        });
    }
    createInventory(inventory) {
        const url = `${API_URL + PATH}`;
        return axios.post(url, inventory)
        .catch(function (error) {
            // handle error
            window.location.href = "/";
        });;
    }
    updateInventory(inventory) {
        const url = `${API_URL + PATH}${inventory.pk}/`;
        return axios.put(url, inventory)
        .catch(function (error) {
            // handle error
            window.location.href = "/";
        });;
    }
}