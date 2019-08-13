import { API_URL } from '../../store/constant';

let PATH = 'users/api/';

class User{

    getUsers = async () => {
        const url = `${API_URL + PATH}`;
        const init ={
            method:'GET',
        }
        const r = await fetch(url, init);
        return r.json();
    }

    getUser = async (pk) => {
        const url = `${API_URL + PATH}${pk}`;
        const init = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const r = await fetch(url, init);
        return r.json();
    }

    storeUser = async (data) => {
        const url = `${API_URL + PATH}`;
        const init = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        const r = await fetch(url, init);
        return r.json();
    }

    updateUser = async (pk, data) => {
        const url = `${API_URL + PATH}${pk}/`;
        const init = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        const r = await fetch(url, init);
        return r.json();
    }

    deleteUser = async (pk) => {
        const url = `${API_URL + PATH}${pk}/`;
        const init = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        }
        const r = await fetch(url, init);
        return r;
    }

    currentUser = async () => {
        const url = `${API_URL}users/current_user/`;
        const init = {
            headers: {
                Authorization: `JWT ${localStorage.getItem('token')}`
            },
        }
        const r = await fetch(url, init);
        return r;
    }
    
    
}

export default User;