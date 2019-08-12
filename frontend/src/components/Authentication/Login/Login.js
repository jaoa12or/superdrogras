import React from 'react';
import {NavLink} from 'react-router-dom';
import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";

class Login extends React.Component {

    state = {
        username: '',
        password: '',
        username_error: '',
        password_error: ''
    };

    handle_change = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(prevstate => {
          const newState = { ...prevstate };
          newState[name] = value;
          return newState;
        });
    };

    handle_login = (e, data) => {
        e.preventDefault();
        fetch('http://uno.localhost:8000/users/token-auth/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(json => {
            if (typeof json.token !== 'undefined') {
                localStorage.setItem('token', json.token);
                this.setState({
                    logged_in: true,
                    displayed_form: '',
                    username: json.user.username
                });
                this.props.history.push('/users')
            }else if(typeof json.username !== 'undefined' || typeof json.password !== 'undefined'){
                if(typeof json.username !== 'undefined'){
                    this.setState(prevstate => {
                        const newState = { ...prevstate };
                        newState['username_error'] = json.username;
                        return newState;
                    });
                }
                if(typeof json.password !== 'undefined'){
                    this.setState(prevstate => {
                        const newState = { ...prevstate };
                        newState['password_error'] = json.password;
                        return newState;
                    });
                }
            }
        });
    };


    renderError() {
        const { username_error } = this.state;
        const { password_error } = this.state;
    
        if (username_error) {

            return (
                <span className="text-danger" role="alert">
                    <strong>{username_error}</strong>
                </span>
            )
        }

        if (password_error) {
            return (
                <span className="text-danger" role="alert">
                    <strong>{password_error}</strong>
                </span>
            )
        }
    
        return null;
    }

    render () {
        return(
            <Aux>
                <Breadcrumb/>
                <div className="auth-wrapper">
                    <div className="auth-content">
                        <div className="auth-bg">
                            <span className="r"/>
                            <span className="r s"/>
                            <span className="r s"/>
                            <span className="r"/>
                        </div>
                        <div className="card">
                            <div className="card-body text-center">
                                <form onSubmit={e => this.handle_login(e, this.state)}>
                                    <div className="mb-4">
                                        <i className="feather icon-user-plus auth-icon"/>
                                    </div>
                                    <h3 className="mb-4">Login</h3>
                                    <div className="form-group">
                                        <input 
                                        type="text" 
                                        className="form-control" 
                                        name="username"
                                        value={this.state.username}
                                        onChange={this.handle_change} 
                                        placeholder="Username"
                                        />
                                        {this.renderError()}
                                    </div>
                    
                                    <div className="form-group">
                                        <input 
                                        type="password" 
                                        className="form-control"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.handle_change} 
                                        placeholder="password"
                                        />
                                        {this.renderError()}
                                    </div>
                                    
                                    <button type="submit" className="btn btn-primary shadow-2 mb-4">Ingresar</button>
                                    <p className="mb-0 text-muted">Olvidaste la contraseña? <NavLink to="/auth/signin-1">Click aquí</NavLink></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default Login;
