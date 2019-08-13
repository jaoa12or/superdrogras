import React from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';

import { FaEdit, FaRegEye, FaTrashAlt } from 'react-icons/fa';

import Aux from "../../../hoc/_Aux";

import  UsersConnection  from  '../Users';

const  usersconnection  =  new  UsersConnection();

 
class UsersTable extends React.Component {

    constructor(props) {
        super(props);
        this.state  = {
            users: []
        };

        //Get users for list
        usersconnection.getUsers().then(
            data => { 
                this.setState({users:data.results})
            }
        )

        // fetch('http://uno.localhost:8000/users/current_user/', {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         Authorization: `JWT ${localStorage.getItem('token')}/`
        //     }
        // })
        // .then(res => res.json())
        // .then(json => {
        //     console.log(json);
        // });
    }

    handleDelete(e, pk){
        e.preventDefault();
        usersconnection.deleteUser(pk).then(
            data => { 
                var  newArr  =  this.state.users.filter(function(obj) {
                    return  obj.id  !==  pk;
                });

                this.setState(prevstate => {
                    const newState = { ...prevstate };
                    newState['users'] = newArr;
                    return newState;
                });
            });
    };

    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Usuarios</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Table striped responsive>
                                    <thead>
                                    <tr>
                                        <th>Username</th>
                                        <th>Nombre</th>
                                        <th>Apellido</th>
                                        <th>Correo</th>
                                        <th>Opciones</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.users.map(user=>{
                                        return(
                                            <tr key={user.id}>
                                                <td>{user.username}</td>
                                                <td>{user.first_name}</td>
                                                <td>{user.last_name}</td>
                                                <td>{user.email}</td>
                                                <td>
                                                    <a href={"/users/edit/" + user.id} className="text-warning"><FaEdit /></a> | 
                                                    <a href='/' className="text-success"><FaRegEye /></a> | 
                                                    <a href='/' onClick={e => this.handleDelete(e, user.id)} className="text-danger"><FaTrashAlt /></a>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default UsersTable;

