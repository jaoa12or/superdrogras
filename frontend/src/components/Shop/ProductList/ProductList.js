import React from 'react';
import {Row, Col, Card, Button,Pagination} from 'react-bootstrap';
import { Link } from  'react-router-dom'
import { PRODUCTS_BY_PAGE } from '../../../store/constant';
import Aux from "../../../hoc/_Aux";
import  Shop  from  '../Shop';
const  shop  =  new  Shop();

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state  = {
            products: [],
            nextPageURL:  '',
            prevPageURL:  '',
            numPages:  '',
        };
        this.nextPage  =  this.nextPage.bind(this);
        this.prevPage  =  this.prevPage.bind(this);
        var  self  =  this;
        shop.getProducts().then((result) => {
            self.setState({ products:  result.results, nextPageURL: result.next, prevPageURL: result.previous, numPages: result.count / PRODUCTS_BY_PAGE})
        });
    }
    componentDidMount() {
        var  self  =  this;
        shop.getProducts().then(function (result) {
            self.setState({ products:  result.results, nextPageURL: result.next, prevPageURL: result.previous, numPages: result.count / PRODUCTS_BY_PAGE})
        });
    }

    nextPage(){
        var  self  =  this;
        shop.getProductsByURL(this.state.nextPageURL).then((result) => {
            self.setState({ products:  result.results, nextPageURL: result.next, prevPageURL: result.previous, numPages: result.count / PRODUCTS_BY_PAGE})
        });
    }

    prevPage(){
        var  self  =  this;
        shop.getProductsByURL(this.state.prevPageURL).then((result) => {
            self.setState({ products:  result.results, nextPageURL: result.next, prevPageURL: result.previous, numPages: result.count / PRODUCTS_BY_PAGE})
        });
    }
    render() {
        let items = [];
        items.push(
            <Pagination.Prev key="prev" onClick={this.prevPage} />
        );
        for (let number = 1; number <= (this.state.numPages + 1); number++) {
            items.push(
                <Pagination.Item key={number}>
                    {number}
                </Pagination.Item>
            );
        }
        items.push(
            <Pagination.Next key="next" onClick={this.nextPage} />
        );
        return (
            <Aux>
                <Row noGutters={true}>
                    {this.state.products.map( product  =>
                        <Col  key={product.pk}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={product.image} />
                                    <Card.Body>
                                    <Card.Title>{product.id_product}</Card.Title>
                                    <Card.Text>
                                        ${product.price}
                                    </Card.Text>
                                    <Link to={"/shop/" + product.pk + "/" + product.slug}>
                                        <Button variant="primary">Ver Detalle</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
                <Pagination>{items}</Pagination>
            </Aux>
        );
    }
}

export default ProductList;