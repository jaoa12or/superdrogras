import React from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';

import { FaEdit, FaRegEye, FaTrashAlt } from 'react-icons/fa';

import Aux from "../../../hoc/_Aux";

function RolesListPage(props){
    const {
        roles,
        onModalShow,
    } = props;
    
    return (
        <Aux>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Roles</Card.Title>
                            <div className="float-right"> 
                                <a href='/roles/create'>
                                    Crear Nuevo Rol
                                </a>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Table striped responsive>
                                <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Opciones</th>
                                </tr>
                                </thead>
                                <tbody>
                                {roles.map(role => 
                                    <tr key={role.id}>
                                        <td>{role.name}</td>
                                        <td>
                                            <a href={`/roles/edit/${role.id}`}  className="text-warning"><FaEdit /></a> | 
                                            <a href={`/roles/detail/${role.id}`} className="text-success"><FaRegEye /></a> | 
                                            <a href='#!' className="text-danger" onClick={() => onModalShow(role.id, role.name)}>
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

export default RolesListPage;