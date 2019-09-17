import React from 'react';
import RoleListPage from '../../components/Roles/RoleList';
import RoleDeleteModal from '../../components/Roles/RoleDelete';
import { read, remove } from '../../services/roles-api';


class RoleList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isLoaded: false,
            roles: [],
            delete_id: '',
            delete_name: '',
            error: '',
            show: false,
        }

        this.onModalShow = this.onModalShow.bind(this);
        this.onModalClose = this.onModalClose.bind(this);
        this.onDeleteRole = this.onDeleteRole.bind(this);
    }

    async componentDidMount(){
        try{
            const roles = await read();
            this.setState({
                roles:roles,
                isLoaded: true,
            });
        }catch(error){
            this.setState({error: error.message});
        }
    }

    onModalClose(){
        this.setState({show: false});
    }

    onModalShow = (id, name) => {
        this.setState({
            delete_id: id,
            delete_name: name,
            show: true
        });
    }

    async onDeleteRole(e, pk){
        e.preventDefault();
        await remove(pk);
        var  new_roles  =  this.state.roles.filter(function(obj) {
            return  obj.id  !==  pk;
        });
        this.setState({
            roles: new_roles,
            show: false
        });
    };

    render(){
        const {
            isLoaded,
            delete_id,
            delete_name,
            roles,
            show,
            error,
        } = this.state;

        if(error){
            return <div>Error: {error.message}</div>;
        }else if(!isLoaded){
            return <div>Loading...</div>;
        }else{
            return (
                <>    
                    <RoleListPage
                        roles = {roles}
                        onModalShow = {this.onModalShow}
                    />
                    <RoleDeleteModal
                        id = {delete_id}
                        name = {delete_name}
                        show = {show}
                        onModalClose = {this.onModalClose}
                        onDeleteRole = {this.onDeleteRole}
                    />
                </>
            );
        }
    }
}

export default RoleList;