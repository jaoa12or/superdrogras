import React from 'react';
import {Row, Col, Card, Table, Button,Pagination} from 'react-bootstrap';
import { Link } from  'react-router-dom'

import Aux from "../../../hoc/_Aux";
import  Shop  from  '../Shop';
const  shop  =  new  Shop();

class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state  = {
            product: [],
            pk: props.match.params.pk,
            slug: props.match.params.product_slug
        };
        var  self  =  this;
    }
    componentDidMount() {
        var  self  =  this;
        shop.getProduct(this.state.pk, this.state.slug).then(function (result) {
            self.setState({ product:  result})
        });
    }

    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Table responsive hover>
                            <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Subdominio</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Codigo:</td>
                                    <td>{this.state.product.pk}</td>
                                </tr>
                                <tr>
                                    <td>Id Producto:</td>
                                    <td>{this.state.product.id_product}</td>
                                </tr>
                                <tr>
                                    <td>Codigo:</td>
                                    <td>{this.state.product.pk}</td>
                                </tr>
                                <tr>
                                    <td>Laboratorio:</td>
                                    <td>{this.state.product.laboratory}</td>
                                </tr>
                                <tr>
                                    <td>Presentación:</td>
                                    <td>{this.state.product.presentation}</td>
                                </tr>
                                <tr>
                                    <td>Nombre Medico:</td>
                                    <td>{this.state.product.medical_name}</td>
                                </tr>
                                <tr>
                                    <td>Cantidad:</td>
                                    <td>{this.state.product.quantity}</td>
                                </tr>
                                <tr>
                                    <td>Unidad de medida:</td>
                                    <td>{this.state.product.measure_unity}</td>
                                </tr>
                                <tr>
                                    <td>Descripción::</td>
                                    <td>{this.state.product.description}</td>
                                </tr>
                                <tr>
                                    <td>Referencia:</td>
                                    <td>{this.state.product.reference}</td>
                                </tr>
                                <tr>
                                    <td>Precio:</td>
                                    <td>{this.state.product.price}</td>
                                </tr>
                                <tr>
                                    <td>Disponibilidad:</td>
                                    <td>{this.state.product.available}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default ProductDetail;