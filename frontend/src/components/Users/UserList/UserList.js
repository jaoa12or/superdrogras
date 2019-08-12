import React from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';

import Aux from "../../../hoc/_Aux";

const API_URL = 'http://uno.localhost:8000/users/api/users';

class UsersTable extends React.Component {

    componentWillMount(){
        const init ={
            method:'GET',
        }
        fetch(API_URL, init).then(r=>{
            return r.json()
        }).then(data=>{
            this.setState({users:data})
        })
    }

    state = {
        users: []
    }

    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Striped Table</Card.Title>
                                <span className="d-block m-t-5">use props <code>striped</code> with <code>Table</code> component</span>
                            </Card.Header>
                            <Card.Body>
                                <Table striped responsive>
                                    <thead>
                                    <tr>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.users.map(user=>{
                                        return(
                                            <tr key={user.id}>
                                                <td>{user.username}</td>
                                                <td>{user.first_name}</td>
                                                <td>{user.last_name}</td>
                                            </tr>
                                        )
                                    })}
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

export default UsersTable;

