const API_URL = 'http://uno.localhost:8000/users/api/';

class User{

    getUsers = async () => {
        const init ={
            method:'GET',
        }
        const r = await fetch(API_URL, init);
        return r.json();
    }

    createUser = async () => {
        const init = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const r = await fetch('http://uno.localhost:8000/users/api/create/', init);
        return r.json();
    }

    storeUser = async (data) => {
        const init = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        const r = await fetch('http://uno.localhost:8000/users/api/users/create/', init);
        return r.json();
    }
    
}

export default User;