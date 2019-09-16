import React from 'react';
import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
import {NavLink} from 'react-router-dom';

function ConfirmSendPage(props){
    const {
        email,
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
                            <h5 className="mb-4 text-muted">Se ha enviado un email al correo:</h5>
                            <h4 className="mb-4"><strong>{email}</strong></h4>
                            <hr/>
                            <p className="mb-0 text-muted">Iniciar Sesión <NavLink to="/login">Click aquí</NavLink></p>
                        </div>
                    </div>
                </div>
            </div>
        </Aux>
    );
}

export default ConfirmSendPage;