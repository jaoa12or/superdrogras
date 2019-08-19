import React from 'react';
import {Row, Col, Card, Form, Button} from 'react-bootstrap';
import Select from 'react-select';

import "react-datepicker/dist/react-datepicker.css";
import Aux from "../../../hoc/_Aux";

function RoleForm(props){
    const {
        action,
        role,
        permissions,
        onChangeNameField,
        onChangePermissionsField,
        onFieldError,
        onSubmit,
    } = props;

    return (
        <Aux>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">{action}</Card.Title>
                            <div className="float-right"> 
                                <a href='/roles'>
                                    Todos los roles
                                </a>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={onSubmit}>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group controlId="formBasicName">
                                            <Form.Label>Nombre del Rol</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                placeholder="Ingrese un nombre para el rol"
                                                value={role.name || ''}
                                                onChange={onChangeNameField}
                                                name="name"/>
                                                <Form.Text className="text-danger">
                                                    {onFieldError('name')}
                                                </Form.Text>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group controlId="formBasicPermissions">
                                            <Form.Label>Permisos</Form.Label>
                                            <Select
                                                onChange={onChangePermissionsField}
                                                name="permissions"
                                                options={permissions}
                                                defaultValue = {role.permissions || []}
                                                isMulti
                                            />
                                                <Form.Text className="text-danger">
                                                    {onFieldError('permissions')}
                                                </Form.Text>
                                        </Form.Group>
                                    </Col>                                        
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <Button type="submit" variant="primary">
                                            {action}
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Aux>
    );
}

export default RoleForm;