import React, { Component } from 'react';
import {Dropdown} from 'react-bootstrap';
import { Redirect } from 'react-router'

import ChatList from './ChatList';
import Aux from "../../../../../hoc/_Aux";
import DEMO from "../../../../../store/constant";

import Avatar1 from '../../../../../assets/images/user/avatar-1.jpg';
import Avatar2 from '../../../../../assets/images/user/avatar-2.jpg';
import Avatar3 from '../../../../../assets/images/user/avatar-3.jpg';

import { currentUser, googleToken, facebookToken } from '../../../../../services/auth-api'


class NavRight extends Component {

    constructor(props) {
        super(props);
        this.state  = {
            listOpen: false,
            logged_in: localStorage.getItem('token') ? true : false,
        };  
    }

    //Evaluar si no se ha vencido el token
    async componentDidMount(){
        if(!this.state.logged_in){
            window.location.href = "/login";
        }else{
            //Validar cuando hay token de google
            const google_token = localStorage.getItem('google_token');
            if (google_token) {
                //Consultar al back si no ha vencido el año
                const google = await googleToken();
                if (typeof google.token === 'undefined') {
                    localStorage.removeItem('google_token');
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                    this.setState({ logged_in: false });
                    window.location.href = "/login";
                }
                return true;
            }

            //Validar cuando hay token de facebook
            const facebook_token = localStorage.getItem('facebook_token');
            if (facebook_token) {
                const user_data = new URLSearchParams();
                user_data.set("token", localStorage.getItem('facebook_token'));
                user_data.set("email", localStorage.getItem('email'));
                user_data.set("first_name", localStorage.getItem('first_name'));
                user_data.set("last_name", localStorage.getItem('last_name'));
                //Consultar al back si no ha vencido el año
                const facebook = await facebookToken(user_data);
                if (typeof facebook.token === 'undefined') {
                    localStorage.removeItem('facebook_token');
                    localStorage.removeItem('email');
                    localStorage.removeItem('first_name');
                    localStorage.removeItem('last_name');
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                    this.setState({ logged_in: false });
                    window.location.href = "/login";
                }
                return true;
            }
    
            const current_user = await currentUser();
            //Si ha vencido la sesión, se cierra en el front también
            if(current_user.detail === 'Signature has expired.'){
                console.log(current_user);
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                this.setState({ logged_in: false });
            }
        }
    }

    handle_logout = (data) => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('google_token');
        localStorage.removeItem('facebook_token');
        localStorage.removeItem('email');
        localStorage.removeItem('first_name');
        localStorage.removeItem('last_name');
        this.setState({ logged_in: false });
    };

    redirectToLogin = () =>{
        // if (this.state.logged_in){
        //     const current_user = currentUser();
        //     current_user.then(json => {
        //         if (json.id === 'undefined') {
        //             this.setState({ logged_in: false });
        //             console.log(json);
        //         }else{
        //             console.log(json);
        //         }
        //     });
        // }
        const { logged_in } = this.state;
        if (!logged_in) {
            return <Redirect to='/login'/>;
        }
        return null;
    }

    renderMenuAccount(){
        const { logged_in } = this.state;
        if (logged_in) {
            let user = JSON.parse(localStorage.getItem('user'));
            return (
                <div>
                    <div className="pro-head">
                        {user.image !== "" ?
                            <img src={user.image} className="img-radius" alt="User Profile"/> : 
                            <img src={Avatar1} className="img-radius" alt="User Profile"/>
                        }
                        <span>{user.first_name} {user.last_name}</span>
                        <a href={DEMO.BLANK_LINK} className="dud-logout" title="Logout" onClick={e => this.handle_logout(this.state)}>
                            <i className="feather icon-log-out"/>
                            {this.redirectToLogin()}
                        </a>
                    </div>
                    <ul className="pro-body">
                        {/*<li><a href={DEMO.BLANK_LINK} className="dropdown-item"><i className="feather icon-settings"/> Settings</a></li>
                        <li><a href={DEMO.BLANK_LINK} className="dropdown-item"><i className="feather icon-user"/> Perfil</a></li>
                        <li><a href={DEMO.BLANK_LINK} className="dropdown-item"><i className="feather icon-mail"/> My Messages</a></li>
                        <li><a href={DEMO.BLANK_LINK} className="dropdown-item"><i className="feather icon-lock"/> Lock Screen</a></li>*/}
                        <li><a href={'/account/profile'} className="dropdown-item"><i className="feather icon-user"/> Perfil</a></li>
                    </ul>
                </div>
            )
        }else{
            return (
                <div>
                    <ul className="pro-body" key='2'>
                        <li>
                            <a className="dropdown-item" href="/login" key='3'> 
                            <i className="feather icon-settings"/> Login</a>
                        </li>
                    </ul>
                    {this.redirectToLogin()}
                </div>
            )
        }
    };

    render() {
        return (
            <Aux>
                <ul className="navbar-nav ml-auto">
                    <li>
                        <Dropdown alignRight={!this.props.rtlLayout}>
                            <Dropdown.Toggle variant={'link'} id="dropdown-basic">
                                <i className="icon feather icon-bell"/>
                            </Dropdown.Toggle>
                            <Dropdown.Menu alignRight className="notification">
                                <div className="noti-head">
                                    <h6 className="d-inline-block m-b-0">Notifications</h6>
                                    <div className="float-right">
                                        <a href={DEMO.BLANK_LINK} className="m-r-10">mark as read</a>
                                        <a href={DEMO.BLANK_LINK}>clear all</a>
                                    </div>
                                </div>
                                <ul className="noti-body">
                                    <li className="n-title">
                                        <p className="m-b-0">NEW</p>
                                    </li>
                                    <li className="notification">
                                        <div className="media">
                                            <img className="img-radius" src={Avatar1} alt="Generic placeholder"/>
                                            <div className="media-body">
                                                <p><strong>John Doe</strong><span className="n-time text-muted"><i
                                                    className="icon feather icon-clock m-r-10"/>30 min</span></p>
                                                <p>New ticket Added</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="n-title">
                                        <p className="m-b-0">EARLIER</p>
                                    </li>
                                    <li className="notification">
                                        <div className="media">
                                            <img className="img-radius" src={Avatar2} alt="Generic placeholder"/>
                                            <div className="media-body">
                                                <p><strong>Joseph William</strong><span className="n-time text-muted"><i
                                                    className="icon feather icon-clock m-r-10"/>30 min</span></p>
                                                <p>Prchace New Theme and make payment</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="notification">
                                        <div className="media">
                                            <img className="img-radius" src={Avatar3} alt="Generic placeholder"/>
                                            <div className="media-body">
                                                <p><strong>Sara Soudein</strong><span className="n-time text-muted"><i
                                                    className="icon feather icon-clock m-r-10"/>30 min</span></p>
                                                <p>currently login</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="noti-footer">
                                    <a href={DEMO.BLANK_LINK}>show all</a>
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    <li className={this.props.rtlLayout ? 'm-r-15' : 'm-l-15'}>
                        <a href={DEMO.BLANK_LINK} className="displayChatbox" onClick={() => {this.setState({listOpen: true});}}><i className="icon feather icon-mail"/></a>
                    </li>
                    <li>
                        <Dropdown alignRight={!this.props.rtlLayout} className="drp-user">
                            <Dropdown.Toggle variant={'link'} id="dropdown-basic">
                                <i className="icon feather icon-settings"/>
                            </Dropdown.Toggle>
                            <Dropdown.Menu alignRight className="profile-notification">
                                {this.renderMenuAccount()}
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                </ul>
                <ChatList listOpen={this.state.listOpen} closed={() => {this.setState({listOpen: false});}} />
            </Aux>
        );
    }
}

export default NavRight;
