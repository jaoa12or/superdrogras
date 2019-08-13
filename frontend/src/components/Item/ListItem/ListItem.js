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
        let items = [];
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
                                        
                                        <th>Item</th>
                                        <th>Cantidad Existente</th>
                                        <th>Cantidad Comprometida</th>
                                        <th>Fecha Ultima Entrada</th>
                                        <th>Fecha Ultima Salida</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.items.map( item  =>
                                            <tr key={item.id}>
                                                
                                                <td>{item.item}</td>
                                                <td>{item.existing_quantity}</td>
                                                <td>{item.committed_quantity}</td>
                                                <td>{item.last_entry_date}</td>
                                                <td>{item.last_output_date}</td>
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