import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from '../../components/MainLanding/Home';
import FranchiseHome from '../../components/FranchiseLanding/FranchiseHome';
import Franchise from '../../components/Franchise/Franchise';
const franchise = new Franchise();
const subdomain = window.location.hostname.split('.');
class MainLandin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            franchise: [],
            route: '?subdomain=' + subdomain[0],
            name: '',
        };
        var self = this;
        if (subdomain && subdomain.length > 1)
            franchise.getFranchiseByURL(this.state.route).then((result) => {
                self.setState({ franchise: result.data, })
            });
    };

    componentDidMount() {

    }

    render() {
        return (
            // <Home/>
            <BrowserRouter>
                <Route path="/" render={props => {
                    if (subdomain && subdomain.length > 1)
                        return <FranchiseHome {...props} franchise={this.state.franchise} />;
                    return <Home {...props} />;
                }} />

            </BrowserRouter>
        );
    }
}

export default MainLandin;