import axios from 'axios';
import { API_URL } from '../../store/constant';

let PATH = 'franchise/api/';

export default class Franchise {

    getFranchises() {
        const url = `${API_URL + PATH}`;
        return axios.get(url)
        .then(response => {
            // returning the data here allows the caller to get it through another .then(...)
            return response.data;
        })
        .catch(function (error) {
            // handle error
            window.location.href = "/";
        });

    }
    getFranchiseByURL(link) {
        const url = `${API_URL + PATH}${link}`;
        return axios.get(url).then(response => response.data)
        .catch(function (error) {
            // handle error
            window.location.href = "/";
        });
    }
    getFranchise(pk) {
        const url = `${API_URL + PATH}${pk}`;
        return axios.get(url).then(response => response.data)
        .catch(function (error) {
            // handle error
            window.location.href = "/";
        });
    }
    deleteFranchise(franchise) {
        const url = `${API_URL + PATH}${franchise.pk}`;
        return axios.delete(url)
        .catch(function (error) {
            // handle error
            window.location.href = "/";
        });
    }
    createFranchise(franchise) {
        const url = `${API_URL + PATH}`;
        return axios.post(url, franchise)
        .catch(function (error) {
            // handle error
            window.location.href = "/";
        });;
    }
    updateFranchise(franchise) {
        const url = `${API_URL + PATH}${franchise.pk}/`;
        return axios.put(url, franchise)
        .catch(function (error) {
            // handle error
            window.location.href = "/";
        });;
    }
}