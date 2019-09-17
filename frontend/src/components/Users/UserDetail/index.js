import React from 'react';
import {Row, Col, Card, Form, Image } from 'react-bootstrap';

import "react-datepicker/dist/react-datepicker.css";
import Aux from "../../../hoc/_Aux";

function UserDetail(props){
    const {
        isProfile,
        user
    } = props;

    return (
        <Aux>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Detalle De Usuario</Card.Title>
                            <div className="float-right">
                                {   !isProfile ?
                                    <>
                                        <a href={`/users/edit/${user.id}`}>
                                            Editar Este Usuario
                                        </a> | 
                                        <a href='/users/create'>
                                            Crear Nuevo Usuario
                                        </a> | 
                                        <a href='/users'>
                                            Todos los Usuarios
                                        </a> 
                                    </>:
                                        <a href='/account/profile/edit'>
                                            Editar Perfil
                                        </a>
                                }
                                
                            </div>
                        </Card.Header>
                        <Card.Body>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group controlId="formBasicUsername">
                                            <center>
                                                <Image src={user.image} roundedCircle width="200"/>
                                            </center>
                                        </Form.Group>
                                        <Form.Group controlId="formBasicUsername">
                                            <Form.Label>Nombre de usuario</Form.Label>
                                            <h5 className="m-0">{user.username}</h5>
                                        </Form.Group>

                                        <Form.Group controlId="formBasicFirstName">
                                            <Form.Label>Nombres</Form.Label>
                                            <h5 className="m-0">{user.first_name}</h5>
                                        </Form.Group>

                                         <Form.Group controlId="formBasicLastName">
                                            <Form.Label>Apellidos</Form.Label>
                                            <h5 className="m-0">{user.last_name}</h5>
                                        </Form.Group>

                                        <Form.Group controlId="formBasicIdentification">
                                            <Form.Label>Identificación</Form.Label>
                                            <h5 className="m-0">{user.identification}</h5>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group controlId="formBasicPhone">
                                            <Form.Label>Teléfono</Form.Label>
                                            <h5 className="m-0">{user.phone}</h5>
                                        </Form.Group>

                                        <Form.Group controlId="formBasicPhone2">
                                            <Form.Label>Móvil</Form.Label>
                                            <h5 className="m-0">{user.phone2}</h5>
                                        </Form.Group>

                                        <Form.Group controlId="formBasicBirthday">
                                            <Form.Label>Aniversario</Form.Label>
                                            <h5 className="m-0">{user.birthday}</h5>
                                        </Form.Group>

                                        <Form.Group controlId="formBasicAddress">
                                            <Form.Label>Dirección</Form.Label>
                                            <h5 className="m-0">{user.address}</h5>
                                        </Form.Group>

                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Email</Form.Label>
                                            <h5 className="m-0">{user.email}</h5>
                                        </Form.Group>
                                        
                                        <Form.Group controlId="formBasicChecbox">
                                            <Form.Label>Estado</Form.Label>
                                            {user.is_active ? 
                                            <h5 className="m-0">Activo</h5> :    
                                            <h5 className="m-0">Inactivo</h5>
                                            }
                                        </Form.Group>

                                        <Form.Group controlId="formBasicGroups">
                                            <Form.Label>Roles</Form.Label>
                                            <ul>
                                                {user.groups.map(group=>{
                                                    return(
                                                        <li key={group.id}>{group.name}</li>
                                                    )
                                                })}
                                            </ul>
                                        </Form.Group>
                                    </Col>
                                </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Aux>
    );
}

export default UserDetail;