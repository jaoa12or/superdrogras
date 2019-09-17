import React from 'react';
import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
import Spinner from 'react-bootstrap/Spinner';

function ResetPasswordPage(props){
    const {
        email,
        waiting,
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
                            <h5 className="mb-4 text-muted">Recuperar Contraseña</h5>
                            <form onSubmit={onSubmitLogin}>
                                {onError("non_field_errors")}
                                <div className="form-group">
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    name="email"
                                    value={email}
                                    onChange={handle_change} 
                                    placeholder="Email"
                                    />
                                    {onError("email")}
                                </div>
                                {
                                    !waiting ?
                                    <button type="submit" className="btn btn-primary shadow-2 mb-4">
                                        Recuperar Contraseña
                                    </button> :
                                    <button type="button" className="btn btn-primary shadow-2 mb-4">
                                        Enviando
                                        <Spinner animation="grow" size="sm" variant="success"/>
                                        <Spinner animation="grow" size="sm" variant="danger"/>
                                        <Spinner animation="grow" size="sm" variant="warning"/>
                                    </button>
                                }
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Aux>
    );
}

export default ResetPasswordPage;