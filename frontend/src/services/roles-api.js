import { API_URL } from '../store/constant';
let path = 'roles/api/';

//Función para realizar la petición al backend mediante api-rest
async function request(method, data, param){
    let url;
    if(param !== ''){
        url = `${API_URL + path + param}/`;
    }else{
        url = `${API_URL + path}`;
    }
    const response = await fetch(url, {
            method: method,
            headers: {
                //'Accept': 'Application/json',
                'Content-Type': 'application/json',
            },
            body: data ? JSON.stringify(data) : undefined,
    });
    if(method === 'DELETE'){
        const response_json = await response;
        return response_json;
    }else{
        const response_json = await response.json();
        return response_json;
    }
}

/****** CRUD ******/

//Traer los objetos para listarlos
export function read(){
    return request('GET', null, '');
}

//Almacenar el objeto
export function store(data){
    return request('POST', data, '');
}

//Traer el objeto para actualizarlo
export function edit(id){
    return request('GET', null, id);
}

//Enviar el objeto para actualizarlo
export function update(id, data){
    return request('PUT', data, id);
}

//Eliminar el objeto
export function remove(id){
    return request('DELETE', null, id);
}

//Traer todos los permisos asociados al objeto
export function readPermissions(){
    let id = 'permissions';
    return request('GET', null, id);
}