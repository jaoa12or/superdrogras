import React from 'react';
import ResetTokenForm from '../../components/Auth/ResetTokenForm';
import { newPassword } from '../../services/auth-api';
import {Form} from 'react-bootstrap';

class ResetToken extends React.Component{

    constructor(props) {
        super(props);
        this.state  = {
            email: '',
            token: '',
            password:'',
            password2:'',
	        error: '',
            waiting: false,
	        errors: []
        };

        this.handle_change = this.handle_change.bind(this);
        this.onSubmitLogin = this.onSubmitLogin.bind(this);
        this.onError = this.onError.bind(this);
    };

    async componentDidMount(){
        const { match: { params } } =  this.props;
        if(params  &&  params.token){
            this.setState({
                token: params.token
            });
        }else{
            this.props.history.push('/login');
        }
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

    
    async onSubmitLogin(e){
    	e.preventDefault();
        this.setState({
            errors: []
        });
        this.onError("password");
        if (this.state.password !== this.state.password2){
            const error = [];
            error.push("No coinciden las contraseñas");
            const errors = {};
            errors["password"] = error;
            this.setState({
                errors: errors
            });
            this.onError("password");
            return false;
        }else if(this.state.password.length < 3){
            const error = [];
            error.push("Debe contener mínimo 3 caracteres");
            const errors = {};
            errors["password"] = error;
            this.setState({
                errors: errors
            });
            this.onError("password");
            return false;
        }
		let form_data = new FormData();
        form_data.append('token', this.state.token);
		form_data.append('password', this.state.password);
		try{
			const reset_password_token = await newPassword(form_data);
            if (typeof reset_password_token.status !== 'undefined') {
                if (reset_password_token.status !== 'notfound'){
                    alert("La contraseña se ha cambiado con éxito");
                    this.props.history.push('/login');
                }else{
                    const error = [];
                    error.push("El token ha expirado");
                    const errors = {};
                    errors["non_field_errors"] = error;
                    this.setState({
                        errors: errors
                    });
                    this.onError("non_field_errors");
                }
            }else{
                this.setState({errors: reset_password_token});
            }
            
		}catch(error){
			this.setState({error: error.message});
		}
    }

    onError(item){        
        if (typeof this.state.errors[item] !== 'undefined') {
            return (<Form.Text className="text-danger">{this.state.errors[item]}</Form.Text>)
        }       
        return null;
    }

    render(){
        const {password, password2, token, error } = this.state;
        
        if(error){
            return <div>Error: {error.message}</div>;
        }else{
            return (
                <ResetTokenForm
                	password = {password}
                    password2 = {password2}
                    token = {token}
                    handle_change = {this.handle_change}
                    onError = {this.onError}
                    onSubmitLogin = {this.onSubmitLogin}
                />
            );
        }
    }
}

export default ResetToken;