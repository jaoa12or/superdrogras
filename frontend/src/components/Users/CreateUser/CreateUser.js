import React from 'react';
import {Row, Col, Card, Form, Button} from 'react-bootstrap';

import Aux from "../../../hoc/_Aux";

import  UsersConnection  from  '../Users';

const  usersconnection  =  new  UsersConnection();

class FormsElements extends React.Component {


    constructor(props) {
        super(props);
        this.state  = {
            username: '',
            first_name: '',
            last_name: '',
            identification: '',
            birthday: '',
            groups: '',
            phone: '',
            phone2: '',
            email: '',
            address: '',
            is_active: '',
            password1: '',
            password2: '',
        };
        
        usersconnection.createUser({}).then(
            data => { 
                console.log(data);
            }
        );
        
    }

    // createUser = (data) => {
    //     usersconnection.createUser(data);
    // }




    render() {

        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Crear Usuario</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form>
                                    <Row>
                                        <Col md={6}>
                                            <Form.Group controlId="formBasicUsername">
                                                <Form.Label>Nombre de usuario</Form.Label>
                                                <Form.Control type="text" placeholder="Ingrese un nombre de usuario" name="username"/>
                                                {/* <Form.Text className="text-muted">
                                                    We'll never share your email with anyone else.
                                                </Form.Text> */}
                                            </Form.Group>

                                            <Form.Group controlId="formBasicFirstName">
                                                <Form.Label>Nombres</Form.Label>
                                                <Form.Control type="text" placeholder="Ingrese los nombres" name="first_name"/>
                                                {/* <Form.Text className="text-muted">
                                                    We'll never share your email with anyone else.
                                                </Form.Text> */}
                                            </Form.Group>

                                            <Form.Group controlId="formBasicLastName">
                                                <Form.Label>Apellidos</Form.Label>
                                                <Form.Control type="text" placeholder="Ingrese los apellidos" name="last_name"/>
                                                {/* <Form.Text className="text-muted">
                                                    We'll never share your email with anyone else.
                                                </Form.Text> */}
                                            </Form.Group>

                                            <Form.Group controlId="formBasicIdentification">
                                                <Form.Label>Identificación</Form.Label>
                                                <Form.Control type="text" placeholder="Ingrese el número de identificación" name="identification"/>
                                                {/* <Form.Text className="text-muted">
                                                    We'll never share your email with anyone else.
                                                </Form.Text> */}
                                            </Form.Group>

                                            <Form.Group controlId="formBasicPhone">
                                                <Form.Label>Teléfono</Form.Label>
                                                <Form.Control type="text" placeholder="Ingrese el número de teléfono" name="phone"/>
                                                {/* <Form.Text className="text-muted">
                                                    We'll never share your email with anyone else.
                                                </Form.Text> */}
                                            </Form.Group>

                                            <Form.Group controlId="formBasicPhone2">
                                                <Form.Label>Móvil</Form.Label>
                                                <Form.Control type="text" placeholder="Ingrese el número de teléfono móvil" name="phone2"/>
                                                {/* <Form.Text className="text-muted">
                                                    We'll never share your email with anyone else.
                                                </Form.Text> */}
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Group controlId="formBasicAddress">
                                                <Form.Label>Dirección</Form.Label>
                                                <Form.Control type="text" placeholder="Ingrese la dirección" name="address"/>
                                                {/* <Form.Text className="text-muted">
                                                    We'll never share your email with anyone else.
                                                </Form.Text> */}
                                            </Form.Group>

                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Email *</Form.Label>
                                                <Form.Control type="email" placeholder="Ingrese el correo electrónico" name="email"/>
                                                {/* <Form.Text className="text-muted">
                                                    We'll never share your email with anyone else.
                                                </Form.Text> */}
                                            </Form.Group>

                                            <Form.Group controlId="formBasicPassword1"></Form.Group>
                                                <Form.Label>Contraseña *</Form.Label>
                                                <Form.Control type="password" placeholder="Ingrese la contraseña" name="password1"/>
                                            </Form.Group>

                                            <Form.Group controlId="formBasicPassword2">
                                                <Form.Label>Confirmar contraseña *</Form.Label>
                                                <Form.Control type="password" placeholder="Confirme la contraseña" name="password2"/>
                                            </Form.Group>

                                            
                                            <Form.Group controlId="formBasicChecbox">
                                                <Form.Check type="checkbox" label="Activo" name="is_active" defaultChecked/>
                                            </Form.Group>

                                            <Button type="submit" variant="primary">
                                                Crear usuario
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
}

export default FormsElements;
