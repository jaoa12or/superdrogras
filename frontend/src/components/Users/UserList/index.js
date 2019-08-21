import React from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';

import { FaEdit, FaRegEye, FaTrashAlt } from 'react-icons/fa';

import Aux from "../../../hoc/_Aux";

function UsersPage(props){
    const {
        users,
        onModalShow,
    } = props;
    
    return (
        <Aux>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Usuarios</Card.Title>
                            <div className="float-right"> 
                                <a href='/users/create'>
                                    Crear Nuevo Usuario
                                </a>
                            </div>
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
                                {users.map(user => 
                                    <tr key={user.id}>
                                        <td>{user.username}</td>
                                        <td>{user.first_name}</td>
                                        <td>{user.last_name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <a href={`/users/edit/${user.id}`}  className="text-warning"><FaEdit /></a> | 
                                            <a href={`/users/detail/${user.id}`} className="text-success"><FaRegEye /></a> | 
                                            <a href='#!' className="text-danger" onClick={() => onModalShow(user.id, user.username)}>
                                                <FaTrashAlt />
                                            </a>
                                        </td>
                                    </tr>  
                                )}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Aux>
    );
}

export default UsersPage;