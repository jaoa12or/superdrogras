import React from 'react';
import {Row, Col, Card, Form, Button} from 'react-bootstrap';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Aux from "../../../hoc/_Aux";

import  UsersConnection  from  '../Users';

const  usersconnection  =  new  UsersConnection();

class FormsElements extends React.Component {


    constructor(props) {
        super(props);
        this.state  = {
            action: 'Crear Usuario',
            id:'',
            username: '',
            first_name: '',
            last_name: '',
            identification: '',
            birthday: new Date(),
            groups: [],
            phone: '',
            phone2: '',
            email: '',
            address: '',
            is_active: true,
            password: '',
            password2: '',
            errors: [],
        };
    };

    componentDidMount(){
        const { match: { params } } =  this.props;
        if(params  &&  params.pk){
            usersconnection.getUser(params.pk).then(
                data => {
                    // let fecha = this.birthday;
                    this.setState(prevstate => {
                        const newState = { ...prevstate };
                        newState['action'] = 'Editar Usuario';
                        newState['username'] = data.username;
                        newState['first_name'] = data.first_name;
                        newState['last_name'] = data.last_name;
                        newState['identification'] = data.identification;
                        newState['birthday'] = new Date(data.birthday);
                        newState['groups'] = data.groups;
                        newState['phone'] = data.phone;
                        newState['phone2'] = data.phone2;
                        newState['address'] = data.address;
                        newState['id'] = data.id;
                        newState['is_active'] = data.is_active;
                        newState['email'] = data.email;
                        newState['password'] = data.password;
                        newState['password2'] = data.password;
                        return newState;
                    });
                }
            )
        }
    }

    handleDate =(date) => {
        // let fecha = this.birthday;
        this.setState(prevstate => {
            const newState = { ...prevstate };
            newState['birthday'] = date;
            return newState;
        });
    };

    toggleChange = () => {
        this.setState(prevstate => {
            const newState = { ...prevstate };
            newState['is_active'] = !this.state.is_active;
            return newState;
        });
    }

    handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(prevstate => {
          const newState = { ...prevstate };
          newState[name] = value;
          return newState;
        });
    };


    handleSubmit = (e,data) => {
        //Frenar el submit
        e.preventDefault();
        //Guardar el formato correcto para el campo fecha
        let save_date = data.birthday;
        //Modificar la fecha para django
        const date = new Date(data.birthday);
        data['birthday'] = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();

        const { match: { params } } =  this.props;
        if(params  &&  params.pk){
            usersconnection.updateUser(params.pk, data).then(
                data => { 
                    if (typeof data.id !== 'undefined') {
                        this.props.history.push('/users')
                    }else {
                        this.setState(prevstate => {
                            const newState = { ...prevstate };
                            //Recuperar la fecha en formato correcto para mostrar de nuevo
                            newState['birthday'] = save_date;
                            //Setear errores para mostrar
                            newState['errors'] = data;
                            return newState;
                        });
                    }
                }
            );
        }else{
            usersconnection.storeUser(data).then(
                data => { 
                    if (typeof data.id !== 'undefined') {
                        this.props.history.push('/users')
                    }else {
                        this.setState(prevstate => {
                            const newState = { ...prevstate };
                            //Recuperar la fecha en formato correcto para mostrar de nuevo
                            newState['birthday'] = save_date;
                            //Setear errores para mostrar
                            newState['errors'] = data;
                            return newState;
                        });
                    }
                }
            );
        }
    };

    renderError(item){        
        if (typeof this.state.errors[item] !== 'undefined') {
            return (<Form.Text className="text-danger">{this.state.errors[item]}</Form.Text>)
        }       
        return null;
    }

    render() {

        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">{this.state.action}</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form onSubmit={e => this.handleSubmit(e, this.state)}>
                                    <Row>
                                        <Col md={6}>
                                            <Form.Group controlId="formBasicUsername">
                                                <Form.Label>Nombre de usuario</Form.Label>
                                                <Form.Control 
                                                    type="text" 
                                                    placeholder="Ingrese un nombre de usuario"
                                                    value={this.state.username}
                                                    onChange={this.handleChange}
                                                    name="username"/>
                                                    {this.renderError('username')}
                                            </Form.Group>

                                            <Form.Group controlId="formBasicFirstName">
                                                <Form.Label>Nombres</Form.Label>
                                                <Form.Control 
                                                    type="text" 
                                                    placeholder="Ingrese los nombres" 
                                                    value={this.state.first_name}
                                                    onChange={this.handleChange}
                                                    name="first_name"/>
                                                    {this.renderError('first_name')}
                                            </Form.Group>

                                            <Form.Group controlId="formBasicLastName">
                                                <Form.Label>Apellidos</Form.Label>
                                                <Form.Control 
                                                    type="text" 
                                                    placeholder="Ingrese los apellidos"
                                                    value={this.state.last_name}
                                                    onChange={this.handleChange}
                                                    name="last_name"/>
                                                    {this.renderError('last_name')}
                                            </Form.Group>

                                            <Form.Group controlId="formBasicIdentification">
                                                <Form.Label>Identificación</Form.Label>
                                                <Form.Control 
                                                    type="text" 
                                                    placeholder="Ingrese el número de identificación"
                                                    value={this.state.identification}
                                                    onChange={this.handleChange} 
                                                    name="identification"/>
                                                    {this.renderError('identification')}
                                            </Form.Group>

                                            <Form.Group controlId="formBasicPhone">
                                                <Form.Label>Teléfono</Form.Label>
                                                <Form.Control 
                                                    type="text" 
                                                    placeholder="Ingrese el número de teléfono" 
                                                    value={this.state.phone}
                                                    onChange={this.handleChange}
                                                    name="phone"/>
                                                    {this.renderError('phone')}
                                            </Form.Group>

                                            <Form.Group controlId="formBasicPhone2">
                                                <Form.Label>Móvil</Form.Label>
                                                <Form.Control 
                                                    type="text" 
                                                    placeholder="Ingrese el número de teléfono móvil" 
                                                    value={this.state.phone2}
                                                    onChange={this.handleChange}
                                                    name="phone2"/>
                                                    {this.renderError('phone2')}
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group controlId="formBasicBirthday">
                                                <Form.Label>Aniversario</Form.Label>
                                                <br/>
                                                <DatePicker
                                                    type="text"
                                                    name="birthday"
                                                    showYearDropdown
                                                    className="form-control"
                                                    selected={this.state.birthday}
                                                    onChange={this.handleDate}/>
                                                    {this.renderError('birthday')}
                                            </Form.Group>

                                            <Form.Group controlId="formBasicAddress">
                                                <Form.Label>Dirección</Form.Label>
                                                <Form.Control 
                                                    type="text" 
                                                    placeholder="Ingrese la dirección"
                                                    value={this.state.address}
                                                    onChange={this.handleChange}
                                                    name="address"/>
                                                    {this.renderError('address')}
                                            </Form.Group>

                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Email *</Form.Label>
                                                <Form.Control 
                                                    type="email" 
                                                    placeholder="Ingrese el correo electrónico"
                                                    value={this.state.email}
                                                    onChange={this.handleChange}
                                                    name="email"/>
                                                    {this.renderError('email')}
                                            </Form.Group>

                                            <Form.Group controlId="formBasicPassword1">
                                                <Form.Label>Contraseña *</Form.Label>
                                                <Form.Control 
                                                    type="password" 
                                                    placeholder="Ingrese la contraseña"
                                                    value={this.state.password}
                                                    onChange={this.handleChange}
                                                    name="password"/>
                                                    {this.renderError('password')}
                                            </Form.Group>

                                            <Form.Group controlId="formBasicPassword2">
                                                <Form.Label>Confirmar contraseña *</Form.Label>
                                                <Form.Control 
                                                    type="password" 
                                                    placeholder="Confirme la contraseña"
                                                    value={this.state.password2}
                                                    onChange={this.handleChange}
                                                    name="password2"/>
                                                    {this.renderError('password')}
                                            </Form.Group>
                                            
                                            <Form.Group controlId="formBasicChecbox">
                                                <Form.Check 
                                                    type="checkbox" 
                                                    label="Activo" 
                                                    name="is_active"
                                                    checked={this.state.is_active}
                                                    onChange={this.toggleChange} />
                                                    {this.renderError('is_active')}
                                            </Form.Group>
                                            
                                            <Button type="submit" variant="primary">
                                                {this.state.action}
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
