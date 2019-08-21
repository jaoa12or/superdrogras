import React from 'react';
import UserListPage from '../../components/Users/UserList';
import UserDeleteModal from '../../components/Users/UserDelete';
import { read, remove } from '../../services/users-api';


class UserList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isLoaded: false,
            users: [],
            delete_id: '',
            delete_username: '',
            error: '',
            show: false,
        }

        this.onModalShow = this.onModalShow.bind(this);
        this.onModalClose = this.onModalClose.bind(this);
        this.onDeleteUser = this.onDeleteUser.bind(this);
    }

    async componentDidMount(){
        try{
            const users = await read();
            this.setState({
                users:users,
                isLoaded:true,
            });
        }catch(error){
            this.setState({error: error.message});
        }
    }

    onModalClose(){
        this.setState({show: false});
    }

    onModalShow = (id, username) => {
        this.setState({
            delete_id: id,
            delete_username: username,
            show: true
        });
    }

    async onDeleteUser(e, pk){
        e.preventDefault();
        await remove(pk);
        var  new_users  =  this.state.users.filter(function(obj) {
            return  obj.id  !==  pk;
        });
        this.setState({
            users: new_users,
            show: false
        });
    };

    render(){
        const {
            isLoaded,
            delete_id,
            delete_username,
            users,
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
                    <UserListPage
                        users = {users}
                        onModalShow = {this.onModalShow}
                    />
                    <UserDeleteModal
                        id = {delete_id}
                        username = {delete_username}
                        show = {show}
                        onModalClose = {this.onModalClose}
                        onDeleteUser = {this.onDeleteUser}
                    />
                </>
            );
        }
    }
}

export default UserList;