import { API_URL } from '../store/constant';
let path = 'users/api/';

//Función para realizar la petición al backend mediante api-rest
async function request(method, param, data){
    let url = `${API_URL + path + param}/`;
    const response = await fetch(url, {
            method: method,
            headers: {
                Authorization: `JWT ${localStorage.getItem('token')}`,
            },
            body: data ? data : undefined,
    });
    const response_json = await response.json();
    return response_json;
}

//Trer el usuario actual
export function currentUser(){
    return request('GET', 'current_user');
}

//Loguear un usuario
export function login(data){
    return request('POST', 'token-auth', data);
}

//Verificar el token de google
export function googleToken(){
    const google_token = localStorage.getItem('google_token');
    const searchParams = new URLSearchParams();
    searchParams.set("token", google_token);
    return request('POST', 'google', searchParams);
}

//Verificar el token de facebook
export function facebookToken(data){
    return request('POST', 'facebook', data);
}

//Enviar Email para recuperar password
export function resetPassword(data){
    return request('POST', 'password_reset', data);
}

//Configurar nueva contraseña
export function newPassword(data){
    return request('POST', 'password_reset/confirm', data);
}