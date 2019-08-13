import React from 'react';
import {Row, Col, Card, Button,Pagination, Div} from 'react-bootstrap';
import { Link } from  'react-router-dom'
import Aux from "../../../hoc/_Aux";
import  Cart  from  '../Cart';
import './CartList.css';

const  cart  =  new  Cart();

class CartList extends React.Component {
    constructor(props) {
        super(props);
        this.state  = {
            products: [],
        };
        var  self  =  this;
        cart.getCart().then((result) => {
            self.setState({ products:  result.products, total_price: result.total_price});
        });
    }
    componentDidMount() {
        var  self  =  this;
        cart.getCart().then(function (result) {
            self.setState({ products:  result.products, total_price: result.total_price});
        });
    }

    render() {
        return (
            <Aux>
                 <div className="card shopping-cart">
                    <div className="card-header bg-dark text-light">
                        Carrito de compras <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        
                        <a href="" className="btn btn-outline-info btn-sm pull-right">Continuar Comprando</a>
                        <div className="clearfix"></div>
                    </div>
                    <div className="card-body">
                        {this.state.products.map( fr  =>
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-2 text-center">
                                <img  />
                            </div>
                            <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
                                <h4 className="product-name"><strong>Product Name</strong></h4>
                                <h4>
                                    <small>Product description</small>
                                </h4>
                            </div>

                            <div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
                                <div className="col-3 col-sm-3 col-md-6 text-md-right">
                                    <h6><strong>25.00 <span className="text-muted">x</span></strong></h6>
                                </div>
                                <div className="col-4 col-sm-4 col-md-4">
                                    <div className="quantity">
                                        <input type="button" value="+" className="plus"/>
                                        <input type="number" step="1" max="99" min="1" value="1" title="Qty" className="qty" size="4"/>
                                        <input type="button" value="-" className="minus"/>
                                    </div>
                                </div>
                                <div className="col-2 col-sm-2 col-md-2 text-right">
                                    <button type="button" className="btn btn-outline-danger btn-xs">
                                        <i className="fa fa-trash" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                         )}
                        
                        <div className="pull-right">
                            <a href="" className="btn btn-outline-secondary pull-right">
                                Actualizar carrito de compras
                            </a>
                        </div>
                    </div>
                       
                    


                    <div className="card-footer">
                        <div className="pull-right">
                            <a href="" className="btn btn-success pull-right">Proceder al Pago</a>
                            <div className="pull-right m-2">
                                Precio total: <b>${this.state.total_price}</b>
                            </div>
                        </div>
                    </div>

                 </div>
            </Aux>
        );
    }
}

export default CartList;