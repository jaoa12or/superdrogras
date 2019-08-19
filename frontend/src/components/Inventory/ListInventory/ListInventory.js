import React from 'react';
import {Row, Col, Card, Table, Button} from 'react-bootstrap';
import { Link } from  'react-router-dom'

import Aux from "../../../hoc/_Aux";
import  Inventory  from  '../Inventory';
const  inventory  =  new  Inventory();

class ListInventory extends React.Component {
    constructor(props) {
        super(props);
        this.state  = {
            inventories: []
        };
        this.handleDelete  =  this.handleDelete.bind(this);
    }
    componentDidMount() {
        var self = this;
        inventory.getInventories().then(function (result) {
            self.setState({ inventories:  result.results})
        });
    }

    handleDelete(e,pk){
        inventory.deleteInventory({pk :  pk}).then(()=>{
            var  newArr  =  this.state.inventories.filter(function(obj) {
                return  obj.pk  !==  pk;
            });
            this.setState({inventories:  newArr})
        });
    }

    render() {
        console.log(typeof(this.state.inventories));
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Inventarios</Card.Title>
                                <span className="d-block m-t-5">Listado de Inventario</span>
                            </Card.Header>
                            <Card.Body>
                                <Table responsive hover>
                                    <thead>
                                    <tr>
                                        
                                        <th>Item</th>
                                        <th>Cantidad Existente</th>
                                        <th>Cantidad Comprometida</th>
                                        <th>Fecha Ultima Entrada</th>
                                        <th>Fecha Ultima Salida</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.inventories.map( item  =>
                                        <tr key={item.id}>
                                            
                                            <td>{item.item}</td>
                                            <td>{item.existing_quantity}</td>
                                            <td>{item.committed_quantity}</td>
                                            <td>{item.last_entry_date}</td>
                                            <td>{item.last_output_date}</td>
                                            <td>
                                            <Link to={"api/inventory/" + item.id}>
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

export default ListInventory;