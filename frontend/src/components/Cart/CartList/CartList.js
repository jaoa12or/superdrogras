import React from 'react';
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
            self.setState({ products:  result.products})
        });
    }
    componentDidMount() {
        var  self  =  this;
        cart.getCart().then(function (result) {
            self.setState({ products:  result.products})
        });
    }

    render() {
        return (
            <Aux>
                HELLO WORLD
            </Aux>
        );
    }
}

export default CartList;