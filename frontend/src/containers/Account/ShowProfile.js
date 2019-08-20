import React from 'react';
import { read } from '../../services/roles-api';
import UserDetailPage from '../../components/Users/UserDetail';


class ShowProfile extends React.Component{

    constructor(props) {
        super(props);
        this.state  = {
            isLoaded: false,
            isProfile: true,
            user: JSON.parse(localStorage.getItem('user')),
            token: localStorage.getItem('token'),
            error:'',
        };
    };

    async componentDidMount(){
        console.log();
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
        const { isLoaded, isProfile, user, error } = this.state;
        if(error){
            return <div>Error: {error.message}</div>;
        }else if(!isLoaded){
            return <div>Loading...</div>;
        }else{
            return (
                <UserDetailPage
                    user = {user}
                    isProfile = {isProfile}
                />
            );
        }
    }
}

export default ShowProfile;