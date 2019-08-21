import React from 'react';
import {Row, Col, Card, Form } from 'react-bootstrap';

import "react-datepicker/dist/react-datepicker.css";
import Aux from "../../../hoc/_Aux";

function RoleDetail(props){
    const {
        role
    } = props;

    return (
        <Aux>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Detalle Del Rol</Card.Title>
                            <div className="float-right">
                                <a href={`/roles/edit/${role.id}`}>
                                    Editar Este Rol
                                </a> | 
                                <a href='/roles/create'>
                                    Crear Nuevo Rol
                                </a> | 
                                <a href='/roles'>
                                    Todos los roles
                                </a>
                            </div>
                        </Card.Header>
                        <Card.Body>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group controlId="formBasicRoleName">
                                            <Form.Label>Nombre</Form.Label>
                                            <h5 className="m-0">{role.name}</h5>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group controlId="formBasicPermissions">
                                            <Form.Label>Permisos</Form.Label>
                                            <ul>
                                                {role.permissions.map(permission=>{
                                                    return(
                                                        <li key={permission.id}>{permission.name}</li>
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

export default RoleDetail;