import React from 'react';
import {Row, Col, Card, Table, Button} from 'react-bootstrap';
import { Link } from  'react-router-dom'

import Aux from "../../../hoc/_Aux";
import  Item  from  '../Item';
const  item  =  new  Item();

class ListItems extends React.Component {
    constructor(props) {
        super(props);
        this.state  = {
            items: [],
        };
        this.handleDelete  =  this.handleDelete.bind(this);
    }
    componentDidMount() {
        var self = this;
        item.getItems().then(function (result) {
            self.setState({ items:  result.results})
        });
    }

    handleDelete(e,pk){
        item.deleteItem({pk :  pk}).then(()=>{
            var  newArr  =  this.state.items.filter(function(obj) {
                return  obj.pk  !==  pk;
            });
            this.setState({items:  newArr})
        });
    }

    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Items</Card.Title>
                                <span className="d-block m-t-5">Listado de Items</span>
                            </Card.Header>
                            <Card.Body>
                                <Table responsive hover>
                                    <thead>
                                    <tr>
                                        
                                        <th>Categoria</th>
                                        <th>ID producto</th>
                                        <th>Laboratorio</th>
                                        <th>Presentación</th>
                                        <th>Nombre Medico</th>
                                        <th>Contenido</th>
                                        <th>Unidad Medida</th>
                                        <th>Descripción</th>
                                        <th>Referencia</th>
                                        <th>Proveedor</th>
                                        <th>Precio</th>
                                        <th>Proveedor</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.items.map( item  =>
                                            <tr key={item.id}>
                                                
                                                <td>{item.category}</td>
                                                <td>{item.id_product}</td>
                                                <td>{item.laboratory}</td>
                                                <td>{item.presentation}</td>
                                                <td>{item.medical_name}</td>
                                                <td>{item.quantity}</td>
                                                <td>{item.measure_unity}</td>
                                                <td>{item.description}</td>
                                                <td>{item.reference}</td>
                                                <td>{item.supplier}</td>
                                                <td>{item.price}</td>
                                                <td>
                                                <Link to={"api/item/" + item.id}>
                                                <Button variant="secondary">
                                                    Editar
                                                </Button>
                                                </Link>
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
}

export default ListItems;