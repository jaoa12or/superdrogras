import React from 'react';
import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
import {NavLink} from 'react-router-dom';

function ResetTokenPage(props){
    const {
        password,
        password2,
        token,
        handle_change,
        onError,
        onSubmitLogin
    } = props;
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
                            <h5 className="mb-4 text-muted">Nueva Contraseña</h5>
                            <form onSubmit={onSubmitLogin}>
                                {onError("non_field_errors")}
                                <input 
                                    type="hidden" 
                                    name="token"
                                    value={token}
                                    />
                                <div className="form-group">
                                    <input 
                                    type="password" 
                                    className="form-control" 
                                    name="password"
                                    value={password}
                                    onChange={handle_change} 
                                    placeholder="Contraseña"
                                    />
                                    {onError("password")}
                                </div>
                                <div className="form-group">
                                    <input 
                                    type="password" 
                                    className="form-control" 
                                    name="password2"
                                    value={password2}
                                    onChange={handle_change} 
                                    placeholder="Confirma Contraseña"
                                    />
                                    {onError("password")}
                                </div>
                                <button type="submit" className="btn btn-primary shadow-2 mb-4">
                                    Cambiar Contraseña
                                </button> 
                                <p className="mb-0 text-muted">Iniciar Sesión <NavLink to="/login">Click aquí</NavLink></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Aux>
    );
}

export default ResetTokenPage;