import React from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';
<<<<<<< HEAD
import { FaEdit, FaTrashAlt, FaRegEye } from 'react-icons/fa';
=======
import { API_URL } from '../../../store/constant';
>>>>>>> 3e51408d2a9b62a1cb04adaf6e44656b31d1bd1f

import Aux from "../../../hoc/_Aux";
import  UsersConnection  from  '../Users';

<<<<<<< HEAD
//const API_URL = 'http://uno.localhost:8000/users/api/users';
=======
let PATH = 'users/api/users';

>>>>>>> 3e51408d2a9b62a1cb04adaf6e44656b31d1bd1f

const  usersconnection  =  new  UsersConnection();

 
class UsersTable extends React.Component {

<<<<<<< HEAD
    constructor(props) {
        super(props);
        this.state  = {
            users: []
        };
=======
    UNSAFE_componentWillMount(){
        const init ={
            method:'GET',
        }
        fetch(API_URL + PATH, init).then(r=>{
            return r.json()
        }).then(data=>{
            this.setState({users:data})
        })
    }
>>>>>>> 3e51408d2a9b62a1cb04adaf6e44656b31d1bd1f

        //Get users for list
        usersconnection.getUsers().then(
            data => { 
                this.setState({users:data})
            }
        )
    }

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
                                                    <a href='/' className="text-warning"><FaEdit /></a> | 
                                                    <a href='/' className="text-success"><FaRegEye /></a> | 
                                                    <a href='/' className="text-danger"><FaTrashAlt /></a>
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

