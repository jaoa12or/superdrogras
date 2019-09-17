import React from 'react';
import RegisterFormPage from '../../components/Auth/RegisterForm';
import FranchiseCreatedModal from '../../components/Auth/FranchiseCreated';
import { createUserFranchise } from '../../services/auth-api';
import {Form} from 'react-bootstrap';


class UserRegisterForm extends React.Component{

    constructor(props) {
        super(props);
        this.state  = {
            isLoaded: true,
            user:{
                franchise:'',
                domain:'',
                address:'',
                phone:'',
                description:'',
                username: '',
                first_name: '',
                last_name: '',
                phone2: '',
                email: '',
                password: '',
                password2: '',
            },
            show: false,
            created: false,
            subdomain: '',
            errors: [],
            error:'',
        };
        this.onChangeField = this.onChangeField.bind(this);
        this.onError = this.onError.bind(this);      
        this.onSubmit = this.onSubmit.bind(this); 
    };

    async componentDidMount(){
        //Si es edición, se carga el objeto
    }
   

    onChangeField = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(prevState => {
            let user = Object.assign({}, prevState.user); 
            user[name] = value;                                      
            return { user };                                 
        });
    };

    async onSubmit(e){
        //Frenar el submit
        e.preventDefault();

        if (!this.checkSubdomain()) {
            return false;
        }

        if (!this.checkPassword()) {
            return false;
        }
        
        let form_data = new FormData();
        form_data.append('name', this.state.user.franchise);
        form_data.append('schema_name', this.state.user.domain);
        form_data.append('address', this.state.user.address);
        form_data.append('phone', this.state.user.phone);
        form_data.append('description', this.state.user.description);
        form_data.append('username', this.state.user.username);
        form_data.append('first_name', this.state.user.first_name);
        form_data.append('last_name', this.state.user.last_name);
        form_data.append('phone2', this.state.user.phone2);
        form_data.append('email', this.state.user.email);
        form_data.append('password', this.state.user.password);

        try{
            const create_user_franchise = await createUserFranchise(form_data);
            if (typeof create_user_franchise.token !== 'undefined') {
                console.log(create_user_franchise);
            }else{
                this.setState({errors: create_user_franchise});
            }
        }catch(error){
            this.setState({error: error.message});
        }
    }

    checkSubdomain = () => {
        const check_subdomain = new RegExp('^[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*$');
        if (!check_subdomain.test(this.state.user.domain)) {
            const error = [];
            error.push("El subdominio no es válido");
            const errors = {};
            errors["domain"] = error;
            this.setState({
                errors: errors
            });
            this.onError("domain");
            return false;
        }
        return true;
    }

    checkPassword = () => {
        if (this.state.user.password !== this.state.user.password2){
            const error = [];
            error.push("No coinciden las contraseñas");
            const errors = {};
            errors["password"] = error;
            this.setState({
                errors: errors
            });
            this.onError("password");
            return false;
        }else if(this.state.user.password.length < 3){
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
        return true;
    }

    onRedirect = () => {
        
    }

    onError(item){  
        if (typeof this.state.errors[item] !== 'undefined') {
            return (<Form.Text className="text-danger">{this.state.errors[item]}</Form.Text>)
        }       
        return null;
    }

    render(){
        const { 
            isLoaded, 
            user,
            show,
            subdomain, 
            created,
            errors, 
            error,
        } = this.state;
        if(error){
            return <div>Error: {error.message}</div>;
        }else if(!isLoaded){
            return <div>Loading...</div>;
        }else{
            return (
                <>
                    <RegisterFormPage
                        user = {user}
                        errors = {errors}
                        onChangeField = {this.onChangeField}
                        onError = {this.onError}
                        onSubmit = {this.onSubmit}
                    />
                    <FranchiseCreatedModal
                        subdomain = {subdomain}
                        created = {created}
                        show = {show}
                        onRedirect = {this.onRedirect}
                    />
                </>
            );
        }
    }
}

export default UserRegisterForm;