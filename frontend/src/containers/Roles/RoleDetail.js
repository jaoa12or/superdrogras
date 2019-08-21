import React from 'react';
import RoleDetailPage from '../../components/Roles/RoleDetail';
import { edit, readPermissions } from '../../services/roles-api';


class RoleDetail extends React.Component{

    constructor(props) {
        super(props);
        this.state  = {
            isLoaded: false,
            role:{},
            error:'',
        };
    };

    async componentDidMount(){
        //Se cara el usuario para mostrar el detalle
        try{
            const { match: { params } } =  this.props;
            if(params  &&  params.pk){
                const role = await edit(params.pk);
                this.setState({
                    role: role,
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

            //Formatear los permisos actuales del objeto para mostrarlos
            const role_permissions = this.state.role.permissions;
            let new_role_permissions = [];
            permissions.map( permission => {
                role_permissions.find(function(permission_id){
                    if(permission_id === permission.id){
                        new_role_permissions.push({
                            id: permission.id,
                            name: permission.name,
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

            //Informar que la data inicial ya está cargada
            this.setState({
                isLoaded:true,
            });
        }catch(error){
            this.setState({error: error.message});
        }
    }

    render(){
        const { isLoaded, role, error } = this.state;
        if(error){
            return <div>Error: {error.message}</div>;
        }else if(!isLoaded){
            return <div>Loading...</div>;
        }else{
            return (
                <RoleDetailPage
                    role = {role}
                />
            );
        }
    }
}

export default RoleDetail;