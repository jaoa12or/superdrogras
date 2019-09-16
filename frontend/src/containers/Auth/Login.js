import React from 'react';
import LoginForm from '../../components/Auth/LoginForm';
import { login, googleToken, facebookToken } from '../../services/auth-api'
import {Form} from 'react-bootstrap';

class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state  = {
            username: '',
	        password: '',
	        error: '',
	        errors: []
        };

        this.handle_change = this.handle_change.bind(this);
        this.onSubmitLogin = this.onSubmitLogin.bind(this);
        this.onError = this.onError.bind(this);
        this.responseGoogle = this.responseGoogle.bind(this);
        this.responseFacebook = this.responseFacebook.bind(this);
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
		let form_data = new FormData();
		form_data.append('username', this.state.username);
		form_data.append('password', this.state.password);
		try{
			const auth = await login(form_data);
			if (typeof auth.token !== 'undefined') {
				localStorage.setItem('token', auth.token);
                localStorage.setItem('user', JSON.stringify(auth.user));
                this.props.history.push('/');
			}else{
				this.setState({errors: auth});
			}
		}catch(error){
			this.setState({error: error.message});
		}
    }

    async responseGoogle(response){
        console.log(response);
        //Se mete el token de acceso al local storage
        localStorage.setItem('google_token', response.Zi.access_token);
        //Se hace la validción correspondiente con el back
        const google = await googleToken();
        if (typeof google.token !== 'undefined') {
            localStorage.setItem('token', google.token);
            localStorage.setItem('user', JSON.stringify(google.user));
            this.props.history.push('/')
        }
    }

    async responseFacebook(response){
        if (typeof response.id !== 'undefined') {
            //Se mete el token de acceso al local storage
            localStorage.setItem('facebook_token', response.accessToken);
            localStorage.setItem('email', response.email);
            localStorage.setItem('first_name', response.first_name);
            localStorage.setItem('last_name', response.last_name);

            const user_data = new URLSearchParams();
            user_data.set("token", response.accessToken);
            user_data.set("email", response.email);
            user_data.set("first_name", response.first_name);
            user_data.set("last_name", response.last_name);
            const facebook = await facebookToken(user_data);
            if (typeof facebook.token !== 'undefined') {
                localStorage.setItem('token', facebook.token);
                localStorage.setItem('user', JSON.stringify(facebook.user));
                this.props.history.push('/')
            }
        }
    }

    onError(item){        
        if (typeof this.state.errors[item] !== 'undefined') {
            return (<Form.Text className="text-danger">{this.state.errors[item]}</Form.Text>)
        }       
        return null;
    }

    render(){
        const { username, password,error } = this.state;
        
        if(error){
            return <div>Error: {error.message}</div>;
        }else{
            return (
                <LoginForm
                	username = {username}
                	password = {password}
                    handle_change = {this.handle_change}
                    onError = {this.onError}
                    onSubmitLogin = {this.onSubmitLogin}
                    responseGoogle = {this.responseGoogle}
                    responseFacebook = {this.responseFacebook}
                />
            );
        }
    }
}

export default Login;