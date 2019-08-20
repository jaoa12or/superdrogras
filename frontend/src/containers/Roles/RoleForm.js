import React from 'react';
import RoleFormPage from '../../components/Roles/RoleForm';
import { store, edit, update, readPermissions } from '../../services/roles-api'


class RoleForm extends React.Component{

    constructor(props) {
        super(props);
        this.state  = {
            isLoaded: false,
            action: 'Crear Rol',
            role:{
                id:'',
                name: '',
                permissions: [],
            },
            permissions:[],
            errors: [],
            error:'',
        };
        this.onChangeNameField = this.onChangeNameField.bind(this);
        this.onChangePermissionsField = this.onChangePermissionsField.bind(this);
        this.onFieldError = this.onFieldError.bind(this);      
        this.onSubmit = this.onSubmit.bind(this);       
    };

    async componentDidMount(){
        try{
            const { match: { params } } =  this.props;
            if(params  &&  params.pk){
                const role = await edit(params.pk);
                this.setState({
                    action: 'Editar Rol',
                    role: role,
                    errors: [],
                    error:'',
                });
            }
        }catch(error){
            this.setState({error: error.message});
        }

        //Se carga todos los permisos que se podrán asociar a este objeto
        try{
            //Petición de TODOS los permisos al back
            const permissions = await readPermissions();
            
            //Formatear los permisos para meterlos al multiselec
            let new_permissions = [];
            permissions.map( permission => {
                const new_permission = {
                    value: permission.id,
                    label: permission.name,
                };
                new_permissions.push(new_permission);
                return null;
            });

            //Formatear los permisos actuales del objeto para seleccionarlos por default
            const role_permissions = this.state.role.permissions;
            let new_role_permissions = [];
            permissions.map( permission => {
                role_permissions.find(function(permission_id){
                    if(permission_id === permission.id){
                        new_role_permissions.push({
                            value: permission.id,
                            label: permission.name,
                        });
                    }
                    return null;
                });
                return null;
            });

            //Actualizar role.permissions en el state 
            this.setState(prevState => {
                let role = Object.assign({}, prevState.role); 
                role['permissions'] = new_role_permissions;                                      
                return { role };                                 
            });

            //Actualizar roles en el state
            this.setState({
                isLoaded:true,
                permissions: new_permissions,
            });
        }catch(error){
            console.log(error);
            this.setState({error: error.message});
        }
    };

    onChangeNameField = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(prevState => {
            let role = Object.assign({}, prevState.role); 
            role[name] = value;                                      
            return { role };                                 
        });
    };

    onChangePermissionsField = permissions => {
        this.setState(prevState => {
            let role = Object.assign({}, prevState.role); 
            role['permissions'] = permissions;                                      
            return { role };                                 
        });
    };

    async onSubmit(e){
        //Frenar el submit
        e.preventDefault();
        //Datos para enviar a rest api create
        var role_data = this.state.role;
        //Verificar si la url tiene parámetros
        const { match: { params } } =  this.props;
        //seleccionar los ids de los permisos para almacenar la relación
        const permissions = role_data['permissions'];
        let new_permissions = [];
        permissions.map( permission => {
            new_permissions.push(permission.value);
            return null;
        });
        role_data['permissions'] = new_permissions;
        try{
            var response = null;
            if(params  &&  params.pk){
                //on update
                response = await update(params.pk, role_data);
            }else{
                //on create
                response = await store(role_data);
            }
            if (typeof response.id !== 'undefined') {
                this.props.history.push('/roles')
            }else {
                this.setState({errors:response});
            }
        }catch(error){
            this.setState({error: error.message});
        }
    }

    onFieldError(field){  
        if (typeof this.state.errors[field] !== 'undefined') {
            return this.state.errors[field];
        }       
        return null;
    }

    render(){
        const { isLoaded, action, role, permissions, errors, error } = this.state;
        if(error){
            return <div>Error: {error.message}</div>;
        }else if(!isLoaded){
            return <div>Loading...</div>;
        }else{
            return (
                <RoleFormPage
                    action = {action}
                    role = {role}
                    permissions = {permissions}
                    errors = {errors}
                    onChangeNameField = {this.onChangeNameField}
                    onChangePermissionsField = {this.onChangePermissionsField}
                    onFieldError = {this.onFieldError}
                    onSubmit = {this.onSubmit}
                />
            );
        }
    }
}

export default RoleForm;