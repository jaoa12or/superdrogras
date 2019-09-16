import React from 'react';
import {NavLink} from 'react-router-dom';
import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

import {
    FacebookLoginButton,
    GoogleLoginButton,
    // AmazonLoginButton,
    // GithubLoginButton,
    // InstagramLoginButton,
    // LinkedInLoginButton,
    // MicrosoftLoginButton,
    // TwitterLoginButton,
    // BufferLoginButton
} from "react-social-login-buttons";

function LoginPage(props){
    const {
        username,
        password,
        handle_change,
        onError,
        onSubmitLogin,
        responseGoogle,
        responseFacebook,
    } = props;
    const customHeader = {};
    customHeader['Test'] = 'test-header';
    
    return (
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
                            <div className="row">
                                <div className="col-12">
                                    <GoogleLogin
                                        clientId="23629658384-ritdingd5irnm8j7glaapa8vsbjjntc3.apps.googleusercontent.com"
                                        render={renderProps => (
                                            <GoogleLoginButton onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                                Iniciar Sesión con Google
                                            </GoogleLoginButton>
                                        )}
                                        buttonText="GOOGLE"
                                        onSuccess={responseGoogle}
                                        onFailure={responseGoogle}
                                        cookiePolicy={'single_host_origin'}
                                    />
                                </div>
                                <div className="col-12">
                                    <FacebookLogin
                                        appId="472820443311725"
                                        //autoLoad={true}
                                        fields="first_name,last_name,email,picture"
                                        callback={responseFacebook}
                                        render={renderProps => (
                                            <FacebookLoginButton onClick={renderProps.onClick}>
                                                Iniciar Sesión con Facebook
                                            </FacebookLoginButton>
                                        )}
                                    />
                                </div>
                            </div>
                            <hr/>
                            <h5 className="mb-4 text-muted">Ingresar con Usuario y Contraseña</h5>
                            <form onSubmit={onSubmitLogin}>
                                {onError("non_field_errors")}
                                <div className="form-group">
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    name="username"
                                    value={username}
                                    onChange={handle_change} 
                                    placeholder="Username"
                                    />
                                    {onError("username")}
                                </div>
                
                                <div className="form-group">
                                    <input 
                                    type="password" 
                                    className="form-control"
                                    name="password"
                                    value={password}
                                    onChange={handle_change} 
                                    placeholder="password"
                                    />
                                    {onError("password")}
                                </div>
                                
                                <button type="submit" className="btn btn-primary shadow-2 mb-4">Ingresar</button>
                                <p className="mb-0 text-muted">Olvidaste la contraseña? <NavLink to="/reset-email">Click aquí</NavLink></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Aux>
    );
}

export default LoginPage;