import React from 'react';
import {Row, Col, Card, Form, Button, Image} from 'react-bootstrap';
import Select from 'react-select';


import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Aux from "../../../hoc/_Aux";

function UserForm(props){
    const {
        isProfile,
        action,
        user,
        groups,
        onChangeField,
        onFieldError,
        onChangeDateField,
        onChangeGroupsField,
        onChangeIsActiveField,
        onChangeImageField,
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
                                { !isProfile ?
                                    <a href='/users'>
                                        Todos los Usuarios
                                    </a> :
                                    ''
                                }
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={onSubmit}>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group controlId="formBasicUsername">
                                            <Form.Label>Nombre de usuario</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                placeholder="Ingrese un nombre de usuario"
                                                value={user.username || ''}
                                                onChange={onChangeField}
                                                name="username"/>
                                                <Form.Text className="text-danger">
                                                    {onFieldError('username')}
                                                </Form.Text>
                                        </Form.Group>

                                        <Form.Group controlId="formBasicFirstName">
                                            <Form.Label>Nombres</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                placeholder="Ingrese los nombres" 
                                                value={user.first_name || ''}
                                                onChange={onChangeField}
                                                name="first_name"/>
                                                <Form.Text className="text-danger">
                                                    {onFieldError('first_name')}
                                                </Form.Text>
                                        </Form.Group>

                                         <Form.Group controlId="formBasicLastName">
                                            <Form.Label>Apellidos</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                placeholder="Ingrese los apellidos"
                                                value={user.last_name || ''}
                                                onChange={onChangeField}
                                                name="last_name"/>
                                                <Form.Text className="text-danger">
                                                    {onFieldError('last_name')}
                                                </Form.Text>
                                        </Form.Group>

                                        <Form.Group controlId="formBasicIdentification">
                                            <Form.Label>Identificación</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                placeholder="Ingrese el número de identificación"
                                                value={user.identification || ''}
                                                onChange={onChangeField} 
                                                name="identification"/>
                                                <Form.Text className="text-danger">
                                                    {onFieldError('identification')}
                                                </Form.Text>
                                        </Form.Group>

                                        <Form.Group controlId="formBasicPhone">
                                            <Form.Label>Teléfono</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                placeholder="Ingrese el número de teléfono" 
                                                value={user.phone || ''}
                                                onChange={onChangeField}
                                                name="phone"/>
                                                <Form.Text className="text-danger">
                                                    {onFieldError('phone')}
                                                </Form.Text>
                                        </Form.Group>

                                        <Form.Group controlId="formBasicPhone2">
                                            <Form.Label>Móvil</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                placeholder="Ingrese el número de teléfono móvil" 
                                                value={user.phone2 || ''}
                                                onChange={onChangeField}
                                                name="phone2"/>
                                                <Form.Text className="text-danger">
                                                    {onFieldError('phone2')}
                                                </Form.Text>
                                        </Form.Group>
                                        { !isProfile ?
                                        <Form.Group controlId="formBasicGroups">
                                            <Form.Label>Roles</Form.Label>
                                            <Select
                                                onChange={onChangeGroupsField}
                                                name="groups"
                                                options={groups || []}
                                                defaultValue = {user.groups || []}
                                                isMulti
                                            />
                                                <Form.Text className="text-danger">
                                                    {onFieldError('groups')}
                                                </Form.Text>
                                        </Form.Group>:
                                        ''}
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group controlId="formBasicImage">
                                            <center>
                                                <Image src={user.image || ''} roundedCircle width="200"/>
                                            </center>
                                            <Form.Label>Imagen</Form.Label>
                                            <Form.Control 
                                                type="file" 
                                                name="image"
                                                onChange={onChangeImageField}/>
                                            <Form.Text className="text-danger">
                                                {onFieldError('image')}
                                            </Form.Text>
                                        </Form.Group>
                                        <Form.Group controlId="formBasicBirthday">
                                            <Form.Label>Aniversario</Form.Label>
                                            <br/>
                                            <DatePicker
                                                name="birthday"
                                                showYearDropdown
                                                className="form-control"
                                                selected= {new Date(user.birthday)}
                                                onChange={onChangeDateField}/>
                                                <Form.Text className="text-danger">
                                                    {onFieldError('birthday')}
                                                </Form.Text>
                                        </Form.Group>

                                        <Form.Group controlId="formBasicAddress">
                                            <Form.Label>Dirección</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                placeholder="Ingrese la dirección"
                                                value={user.address || ''}
                                                onChange={onChangeField}
                                                name="address"/>
                                                <Form.Text className="text-danger">
                                                    {onFieldError('address')}
                                                </Form.Text>
                                        </Form.Group>

                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Email *</Form.Label>
                                            <Form.Control 
                                                type="email" 
                                                placeholder="Ingrese el correo electrónico"
                                                value={user.email || ''}
                                                onChange={onChangeField}
                                                name="email"/>
                                                <Form.Text className="text-danger">
                                                    {onFieldError('email')}
                                                </Form.Text>
                                        </Form.Group>

                                        <Form.Group controlId="formBasicPassword1">
                                            <Form.Label>Contraseña *</Form.Label>
                                            <Form.Control 
                                                type="password" 
                                                placeholder="Ingrese la contraseña"
                                                value={user.password || ''}
                                                onChange={onChangeField}
                                                name="password"/>
                                                <Form.Text className="text-danger">
                                                        {onFieldError('password')}
                                                </Form.Text>
                                        </Form.Group>

                                        { !isProfile ?
                                        <Form.Group controlId="formBasicPassword2">
                                            <Form.Label>Confirmar contraseña *</Form.Label>
                                            <Form.Control 
                                                type="password" 
                                                placeholder="Confirme la contraseña"
                                                value={user.password || ''}
                                                onChange={onChangeField}
                                                name="password2"/>
                                                <Form.Text className="text-danger">
                                                        {onFieldError('password')}
                                                </Form.Text>
                                        </Form.Group> :
                                        <br/>}
                                        
                                        { !isProfile ?
                                        <Form.Group controlId="formBasicChecbox">
                                            <Form.Check 
                                                type="checkbox" 
                                                label="Activo" 
                                                name="is_active"
                                                defaultChecked={user.is_active}
                                                onChange={onChangeIsActiveField}/>
                                                <Form.Text className="text-danger">
                                                        {onFieldError('password')}
                                                </Form.Text>
                                        </Form.Group> :
                                        ''}


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

export default UserForm;