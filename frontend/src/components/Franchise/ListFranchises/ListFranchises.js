import React from 'react';
import {Row, Col, Card, Table, Button,Pagination} from 'react-bootstrap';
import { Link } from  'react-router-dom'

import Aux from "../../../hoc/_Aux";
import  Franchise  from  '../Franchise';
const  franchise  =  new  Franchise();

class ListFranchises extends React.Component {
    constructor(props) {
        super(props);
        this.state  = {
            franchises: [],
            nextPageURL:  '',
            prevPageURL:  '',
            numPages:  ''
        };
        this.nextPage  =  this.nextPage.bind(this);
        this.prevPage  =  this.prevPage.bind(this);
        this.handleDelete  =  this.handleDelete.bind(this);
        var  self  =  this;
        franchise.getFranchiseByURL(this.state.numPages).then((result) => {
            self.setState({ numPages:  result.numpages})
        });
    }
    componentDidMount() {
        var  self  =  this;
        franchise.getFranchises().then(function (result) {
            self.setState({ franchises:  result.data, nextPageURL:  result.nextlink})
        });
    }

    handleDelete(e,pk){
        var  self  =  this;
        franchise.deleteFranchise({pk :  pk}).then(()=>{
            var  newArr  =  self.state.franchises.filter(function(obj) {
                return  obj.pk  !==  pk;
            });
            self.setState({franchises:  newArr})
        });
    }

    nextPage(){
        var  self  =  this;
        franchise.getFranchiseByURL(this.state.nextPageURL).then((result) => {
            self.setState({ franchises:  result.data, nextPageURL:  result.nextlink})
        });
    }

    prevPage(){
        var  self  =  this;
        franchise.getFranchiseByURL(this.state.prevPageURL).then((result) => {
            self.setState({ franchises:  result.data, prevPageURL:  result.prevlink})
        });
    }
    render() {
        let items = [];
        for (let number = 1; number <= 2; number++) {
            items.push(
                <Pagination.Item key={number}>
                    {number}
                </Pagination.Item>
            );
        }
        return (
            <Aux>
                <Row>
                    <Col>
                        
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Franquicias</Card.Title>
                                <span className="d-block m-t-5">Listado de Franquicias</span>
                            </Card.Header>
                            <Card.Body>
                                <Table responsive hover>
                                    <thead>
                                    <tr>
                                        
                                        <th>Nombre</th>
                                        <th>Subdominio</th>
                                        <th>Descripción</th>
                                        <th>Dirección</th>
                                        <th>Teléfono</th>
                                        <th>Acciones</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.franchises.map( fr  =>
                                        <tr key={fr.id}>
                                            
                                            <td>{fr.name}</td>
                                            <td>{fr.schema_name}</td>
                                            <td>{fr.description}</td>
                                            <td>{fr.address}</td>
                                            <td>{fr.phone}</td>
                                            <td>
                                            <Link to={"/franchise/update/" + fr.id}>
                                            <Button variant="secondary">
                                                Editar
                                            </Button>
                                            </Link>
                                            </td>

                                        </tr>
                                    )}
                                    </tbody>
                                </Table>
                                <Pagination>{items}</Pagination>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default ListFranchises;