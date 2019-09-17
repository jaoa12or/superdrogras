import React from 'react';
import { BrowserRouter, Route } from  'react-router-dom' 
import Home from '../../components/MainLanding/Home';
import FranchiseHome from '../../components/FranchiseLanding/FranchiseHome';

class MainLandin extends React.Component{

    constructor(props) {
        super(props);
        this.state  = {
        };
    };

    componentDidMount(){
        
    }

    render(){
        return (
            // <Home/>
            <BrowserRouter> 
                <Route path="/" render={props => { 
                    const subdomain = window.location.hostname.split('.'); 
                    if (subdomain && subdomain.length > 1) 
                        return <FranchiseHome {...props} subdomain={subdomain[0]}/>; 
                        return <Home {...props}/>; }}/> 
                    
            </BrowserRouter>
        );
    }
}

export default MainLandin;