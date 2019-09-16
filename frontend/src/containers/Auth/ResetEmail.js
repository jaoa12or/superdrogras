import React from 'react';
import ResetForm from '../../components/Auth/ResetForm';
import { resetPassword } from '../../services/auth-api';
import {Form} from 'react-bootstrap';

class ResetEmail extends React.Component{

    constructor(props) {
        super(props);
        this.state  = {
            email: '',
	        error: '',
            waiting: false,
	        errors: []
        };

        this.handle_change = this.handle_change.bind(this);
        this.onSubmitLogin = this.onSubmitLogin.bind(this);
        this.onError = this.onError.bind(this);
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
        this.setState({waiting: true});
		let form_data = new FormData();
		form_data.append('email', this.state.email);
		try{
			const reset_password_email = await resetPassword(form_data);
            if (typeof reset_password_email.status !== 'undefined') {
                localStorage.setItem('email', this.state.email);
                this.setState({waiting: false});
                this.props.history.push('/reset-email-confirmation');
            }else{
                this.setState({waiting: false});
                this.setState({errors: reset_password_email});
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
        const { email, waiting, error } = this.state;
        
        if(error){
            return <div>Error: {error.message}</div>;
        }else{
            return (
                <ResetForm
                	email = {email}
                    waiting = {waiting}
                    handle_change = {this.handle_change}
                    onError = {this.onError}
                    onSubmitLogin = {this.onSubmitLogin}
                    loadSpinner = {this.loadSpinner}
                />
            );
        }
    }
}

export default ResetEmail;