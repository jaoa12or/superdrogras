import React from 'react';
import {Row, Col, Card, Form, Button} from 'react-bootstrap';
import  Item  from  '../Item';

import Aux from "../../../hoc/_Aux";

const  item  =  new  Item();

class CreateUpdateItem extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        const { match: { params } } =  this.props;
        if(params  &&  params.pk)
        {
            item.getItem(params.pk).then((fr)=>{
                this.refs.name.value  =  fr.name;
                this.refs.schema_name.value  =  fr.schema_name;
                this.refs.description.value  =  fr.description;
                this.refs.phone.value  =  fr.phone;
                this.refs.address.value  =  fr.address;
            })
        }
    }
    handleCreate(){
        item.createItem(
            {
            "name":  this.refs.name.value,
            "schema_name":  this.refs.schema_name.value,
            "description":  this.refs.description.value,
            "phone":  this.refs.phone.value,
            "address":  this.refs.address.value,
            }).then((result)=>{
                    alert("item created!");
            }).catch(()=>{
                    alert('There was an error! Please re-check your form.');
            });
    }
    handleUpdate(pk){
        item.updateItem(
            {
            "pk":  pk,
            "name":  this.refs.name.value,
            "schema_name":  this.refs.schema_name.value,
            "description":  this.refs.description.value,
            "phone":  this.refs.phone.value,
            "address":  this.refs.address.value,
            }
            ).then((result)=>{
        
                alert("item updated!");
            }).catch(()=>{
                alert('There was an error! Please re-check your form.');
            });
        }
    
    handleSubmit(event) {
        const { match: { params } } =  this.props;
        if(params  &&  params.pk){
            this.handleUpdate(params.pk);
        }
        else
        {
            this.handleCreate();
        }
        event.preventDefault();
    }
    render() {

        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Item</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <h5>Crear Item</h5>
                                <hr/>
                                <Form onSubmit={this.handleSubmit}>
                                    <Row>
                                        <Col md={6}>
                                            <Form.Group controlId="exampleForm.ControlInput1">
                                                <Form.Label>Nombre de Item</Form.Label>
                                                <Form.Control ref="name" type="text" placeholder="ej. La Rebaja" />
                                            </Form.Group>

                                            <Form.Group controlId="exampleForm.ControlInput1">
                                                <Form.Label>Subdominio</Form.Label>
                                                <Form.Control ref="schema_name" type="text" placeholder="ej. larebaja" />
                                            </Form.Group>
                                            <Form.Group controlId="exampleForm.ControlInput1">
                                                <Form.Label>Descripción</Form.Label>
                                                <Form.Control ref="description" type="text" placeholder="ej. la mejor franquicia" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group controlId="exampleForm.ControlInput1">
                                                <Form.Label>Dirección</Form.Label>
                                                <Form.Control ref="address" type="text" placeholder="ej. calle luna con carrera sol" />
                                            </Form.Group>
                                            <Form.Group controlId="exampleForm.ControlInput1">
                                                <Form.Label>Teléfono</Form.Label>
                                                <Form.Control ref="phone" type="text" placeholder="ej. 543 6789" />
                                            </Form.Group>
                                            <Button variant="primary" type="submit" value="submit">
                                                Submit
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

export default CreateUpdateItem;
