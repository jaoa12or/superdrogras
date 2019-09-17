import React from 'react';
// import {Link} from 'react-router-dom';
import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
import logo from '../../../assets/images/landing_logo.png';
import {Link, Button} from 'rebass';
import Spinner from 'react-bootstrap/Spinner';


function RegisterPage(props){
    const {
        user,
        waiting,
        onChangeField,
        onError,
        onSubmit,
    } = props;
    
    return (
        <Aux>
            <Breadcrumb/>
            <div className="auth-wrapper">
                <div className="auth-content" style={{flex:0.8}}>
                    <div className="auth-bg">
                        <span className="r"/>
                        <span className="r s"/>
                        <span className="r s"/>
                        <span className="r"/>
                    </div>
                    <div className="card">
                        <div className="card-body text-center">
                            <Link href="/">
                                <img src={logo}
                                    alt="logo"
                                    height="50"
                                />
                            </Link>
                            <hr/>
                            <form onSubmit={onSubmit}>
                                {onError("non_field_errors")}
                                <div className="row">
                                    <div className="col-lg-6 col-sm-12">
                                        <h5 className="mb-4 text-muted">Datos de la franquicia</h5>
                                        <div className="row form-group">
                                            <label className="col-lg-4 text-lg-right">
                                                Nombre de franquicia: 
                                            </label>
                                            <div className="col-lg-8">
                                                <input 
                                                type="franchise" 
                                                className="form-control"
                                                name="franchise"
                                                value={user.franchise||''}
                                                onChange={onChangeField} 
                                                placeholder="franchise"
                                                />
                                                {onError("franchise")}
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <label className="col-lg-4 text-lg-right">
                                                Url de franquicia: 
                                            </label>
                                            <div className="col-lg-8">
                                                <input 
                                                type="domain" 
                                                className="form-control"
                                                name="domain"
                                                value={user.domain||''}
                                                onChange={onChangeField} 
                                                placeholder="domain"
                                                />
                                                {onError("domain")}
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <label className="col-lg-4 text-lg-right">
                                                Dirección de franquicia: 
                                            </label>
                                            <div className="col-lg-8">
                                                <input 
                                                type="address" 
                                                className="form-control"
                                                name="address"
                                                value={user.address||''}
                                                onChange={onChangeField} 
                                                placeholder="Dirección"
                                                />
                                                {onError("address")}
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <label className="col-lg-4 text-lg-right">
                                                Teléfono de franquicia: 
                                            </label>
                                            <div className="col-lg-8">
                                                <input 
                                                type="phone" 
                                                className="form-control"
                                                name="phone"
                                                value={user.phone||''}
                                                onChange={onChangeField} 
                                                placeholder="Teléfono"
                                                />
                                                {onError("phone")}
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <label className="col-lg-4 text-lg-right">
                                                Descripción de franquicia: 
                                            </label>
                                            <div className="col-lg-8">
                                                <input 
                                                type="description" 
                                                className="form-control"
                                                name="description"
                                                value={user.description||''}
                                                onChange={onChangeField} 
                                                placeholder="Descripción"
                                                />
                                                {onError("description")}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-12">
                                        <h5 className="mb-4 text-muted">Datos del usuario</h5>
                                        <div className="row form-group">
                                            <label className="col-lg-4 text-lg-right">
                                                Nombre de usuario: 
                                            </label>
                                            <div className="col-lg-8">
                                                <input 
                                                type="username" 
                                                className="form-control"
                                                name="username"
                                                value={user.username||''}
                                                onChange={onChangeField} 
                                                placeholder="username"
                                                />
                                                {onError("username")}
                                            </div>
                                        </div>
                        
                                        <div className="row form-group">
                                            <label className="col-lg-4 text-lg-right">
                                                Nombre: 
                                            </label>
                                            <div className="col-lg-8">
                                                <input 
                                                type="first_name" 
                                                className="form-control"
                                                name="first_name"
                                                value={user.first_name||''}
                                                onChange={onChangeField} 
                                                placeholder="Nombres"
                                                />
                                                {onError("first_name")}
                                            </div>
                                        </div>

                                        <div className="row form-group">
                                            <label className="col-lg-4 text-lg-right">
                                                Apellido: 
                                            </label>
                                            <div className="col-lg-8">
                                                <input 
                                                type="last_name" 
                                                className="form-control"
                                                name="last_name"
                                                value={user.last_name||''}
                                                onChange={onChangeField} 
                                                placeholder="Apellidos"
                                                />
                                                {onError("last_name")}
                                            </div>
                                        </div>

                                        <div className="row form-group">
                                            <label className="col-lg-4 text-lg-right">Email: </label>
                                            <div className="col-lg-8">
                                                <input 
                                                type="email" 
                                                className="form-control"
                                                name="email"
                                                value={user.email||''}
                                                onChange={onChangeField} 
                                                placeholder="email"
                                                />
                                                {onError("email")}
                                            </div>
                                        </div>

                                        <div className="row form-group">
                                            <label className="col-lg-4 text-lg-right">
                                                Teléfono: 
                                            </label>
                                            <div className="col-lg-8">
                                                <input 
                                                type="phone2" 
                                                className="form-control"
                                                name="phone2"
                                                value={user.phone2||''}
                                                onChange={onChangeField} 
                                                placeholder="Teléfono"
                                                />
                                                {onError("phone2")}
                                            </div>
                                        </div>

                                        <div className="row form-group">
                                            <label className="col-lg-4 text-lg-right">
                                                Contraseña: 
                                            </label>
                                            <div className="col-lg-8">
                                                <input 
                                                type="password" 
                                                className="form-control"
                                                name="password"
                                                value={user.password||''}
                                                onChange={onChangeField} 
                                                />
                                                {onError("password")}
                                            </div>
                                        </div> 
                                        <div className="row form-group">
                                            <label className="col-lg-4 text-lg-right">
                                                Confirme Contraseña: 
                                            </label>
                                            <div className="col-lg-8">
                                                <input 
                                                type="password" 
                                                className="form-control"
                                                name="password2"
                                                value={user.password2||''}
                                                onChange={onChangeField} 
                                                />
                                                {onError("password")}
                                            </div>
                                        </div>  
                                    </div>
                                </div>
                                {
                                    !waiting ?
                                    <Button type="submit" variant="secondary" bg="purple">Registrarse</Button> :
                                    <Button type="button" variant="secondary" bg="purple">
                                        Enviando
                                        <Spinner animation="grow" size="sm" variant="success"/>
                                        <Spinner animation="grow" size="sm" variant="danger"/>
                                        <Spinner animation="grow" size="sm" variant="warning"/>
                                    </Button>
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Aux>
    );
}

export default RegisterPage;