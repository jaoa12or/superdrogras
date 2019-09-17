import React from 'react';
import UserDetailPage from '../../components/Users/UserDetail';
import { edit } from '../../services/users-api';
import { read } from '../../services/roles-api';


class UserDetail extends React.Component{

    constructor(props) {
        super(props);
        this.state  = {
            isLoaded: false,
            user:{},
            error:'',
        };
    };

    async componentDidMount(){
        //Se cara el usuario para mostrar el detalle
        try{
            const { match: { params } } =  this.props;
            if(params  &&  params.pk){
                const user = await edit(params.pk);
                this.setState({
                    user: user,
                    error:'',
                });
            }
        }catch(error){
            this.setState({error: error.message});
        }

        //Se carga todos los roles que se podrán asociar a este objeto
        try{
            //Petición de TODOS los grupos al back
            const groups = await read();

            //Formatear los grupos actuales del objeto para seleccionarlos por default
            const user_groups = this.state.user.groups;
            let new_user_groups = [];
            groups.map( group => {
                user_groups.find(function(group_id){
                    if(group_id === group.id){
                        new_user_groups.push({
                            id: group.id,
                            name: group.name,
                        });
                    }
                    return null;
                });
                return null;
            });

            //Actualizar user.groups en el state 
            this.setState(prevState => {
                let user = Object.assign({}, prevState.user); 
                user['groups'] = new_user_groups;                                      
                return { user };                                 
            });

            //Actualizar groups en el state
            this.setState({
                isLoaded:true,
            });
        }catch(error){
            this.setState({error: error.message});
        }
    }

    render(){
        const { isLoaded, user, error } = this.state;
        if(error){
            return <div>Error: {error.message}</div>;
        }else if(!isLoaded){
            return <div>Loading...</div>;
        }else{
            return (
                <UserDetailPage
                    user = {user}
                />
            );
        }
    }
}

export default UserDetail;