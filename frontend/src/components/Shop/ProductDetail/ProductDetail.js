import React from 'react';
import {Table, Button, Row, Col} from 'react-bootstrap';
import { Link } from  'react-router-dom'
import './ProductDetail.css';
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
                            <div className="card">
                                <div className="container-fliud">
                                    <div className="wrapper row">
                                        <div className="preview col-md-6">
                                            <div className="preview-pic tab-content" align="center">
                                                <div className="tab-pane active" id="pic-1"><img alt={this.state.product.id_product} src={this.state.product.image} /></div>
                                            </div>
                                        </div>
                                        <div className="details col-md-6">
                                            <h3 className="product-title">{this.state.product.id_product}</h3>
                                            <div className="rating">
                                                <div className="stars">
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                </div>
                                                <span className="review-no">41 calificaciones</span>
                                            </div>
                                            <p className="product-description">{this.state.product.description}</p>
                                            <h4 className="price">Precio: <span>${this.state.product.price}</span></h4>
                                            <div className="action">
                                                <Link to={ "/shop/" + this.state.product.pk + "/" + this.state.product.slug}>
                                                <Button className="add-to-cart btn btn-default">Añadir al Carrito</Button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h4 className="product-title">Información detallada:</h4>
                            <Table responsive hover>
                                <thead>
                                    <tr>
                                        <th>Característica</th>
                                        <th>Información</th>
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
                                </tbody>
                            </Table>

                        </Col>
                    </Row>
                </Aux>
        );
    }
}

export default ProductDetail;