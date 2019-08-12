import axios from 'axios';

const API_URL = 'http://localhost:8000/franchise/';
let host = window.location.host;
console.log(host);

export default class Franchise{

    getFranchises() {
        const url = `${API_URL}api/`;
        return axios.get(url).then(response => response.data);
    }  
    getFranchiseByURL(link){
        const url = `${API_URL}${link}`;
        return axios.get(url).then(response => response.data);
    }
    getFranchise(pk) {
        const url = `${API_URL}api/${pk}`;
        return axios.get(url).then(response => response.data);
    }
    deleteFranchise(franchise){
        const url = `${API_URL}api/${franchise.pk}`;
        return axios.delete(url);
    }
    createFranchise(franchise){
        const url = `${API_URL}api/`;
        return axios.post(url,franchise);
    }
    updateFranchise(franchise){
        const url = `${API_URL}api/${franchise.pk}/`;
        return axios.put(url,franchise);
    }
}