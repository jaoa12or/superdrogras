import React from 'react';
import UserFormPage from '../../components/Users/UserForm';
import { store, edit, update } from '../../services/users-api'
import { read } from '../../services/roles-api'


class UserForm extends React.Component{

    constructor(props) {
        super(props);
        this.state  = {
            isLoaded: false,
            action: 'Crear Usuario',
            user:{
                id:'',
                username: '',
                first_name: '',
                last_name: '',
                identification: '',
                birthday: new Date(),
                groups: [],
                phone: '',
                phone2: '',
                email: '',
                address: '',
                image: null,
                is_active: true,
                password: '',
            },
            image:'',
            groups:[],
            errors: [],
            error:'',
        };
        this.onChangeField = this.onChangeField.bind(this);
        this.onFieldError = this.onFieldError.bind(this);      
        this.onSubmit = this.onSubmit.bind(this); 
        this.onChangeDateField = this.onChangeDateField.bind(this); 
        this.onChangeGroupsField = this.onChangeGroupsField.bind(this);  
        this.onChangeIsActiveField = this.onChangeIsActiveField.bind(this);  
        this.onChangeImageField = this.onChangeImageField.bind(this);  
    };

    async componentDidMount(){
        //Si es edición, se carga el objeto
        try{
            const { match: { params } } =  this.props;
            if(params  &&  params.pk){
                const user = await edit(params.pk);
                this.setState({
                    action: 'Editar Usuario',
                    user: user,
                    errors: [],
                    error:'',
                });
            }
        }catch(error){
            this.setState({error: error.message});
        }

        //Se carga todos los roles que se podrán asociar a este objeto
        try{
            //Petición de TODOS los grupos al back
            const groups = await read();
            
            //Formatear los grupos para meterlos al multiselec
            let new_groups = [];
            groups.map( group => {
                const new_group = {
                    value: group.id,
                    label: group.name,
                };
                new_groups.push(new_group);
                return null;
            });

            //Formatear los grupos actuales del objeto para seleccionarlos por default
            const user_groups = this.state.user.groups;
            let new_user_groups = [];
            groups.map( group => {
                user_groups.find(function(group_id){
                    if(group_id === group.id){
                        new_user_groups.push({
                            value: group.id,
                            label: group.name,
                        });
                    }
                    return null;
                });
                return null;
            });

            //Actualizar user.groups en el state 
            this.setState(prevState => {
                let user = Object.assign({}, prevState.user); 
                user['groups'] = new_user_groups;                                      
                return { user };                                 
            });

            //Actualizar groups en el state
            this.setState({
                isLoaded:true,
                groups: new_groups,
            });
        }catch(error){
            this.setState({error: error.message});
        }
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

    onChangeImageField = e => {
        this.setState({image: e.target.files[0]});
    };

    onChangeDateField = date => {
        const value = new Date(date);
        this.setState(prevState => {
            let user = Object.assign({}, prevState.user); 
            user['birthday'] = value;                                      
            return { user };                                 
        });
    };

    onChangeGroupsField = groups => {
        let new_groups;
        if(groups == null){
            new_groups = [];
        }else{
            new_groups = groups;
        }
        this.setState(prevState => {
            let user = Object.assign({}, prevState.user); 
            user['groups'] = new_groups;                                      
            return { user };                                 
        });
    };
    
    onChangeIsActiveField = () => {
        const value = !this.state.user.is_active;
        this.setState(prevState => {
            let user = Object.assign({}, prevState.user); 
            user['is_active'] = value;                                      
            return { user };                                 
        });
    };

    async onSubmit(e){
        //Frenar el submit
        e.preventDefault();

        //Modificar la fecha para django
        const date = new Date(this.state.user.birthday);
        let new_date= date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();

        //Extraer solo los ids de los grupos para django
        const groups = this.state.user.groups;
        let new_groups = [];
        groups.map( group => {
            new_groups.push(group.value);
            return null;
        });

        let form_data = new FormData();
        form_data.append('username', this.state.user.username);
        form_data.append('first_name', this.state.user.first_name);
        form_data.append('last_name', this.state.user.last_name);
        form_data.append('identification', this.state.user.identification);
        form_data.append('birthday', new_date);
        if(new_groups.length > 0){
            form_data.append('groups', new_groups);
        }
        form_data.append('phone', this.state.user.phone);
        form_data.append('phone2', this.state.user.phone2);
        form_data.append('email', this.state.user.email);
        form_data.append('address', this.state.user.address);
        form_data.append('image', this.state.image);
        form_data.append('is_active', this.state.user.is_active);
        form_data.append('password', this.state.user.password);


        // let user_data = this.state.user;
        // user_data.date = new_date;
        // user_data.groups = new_groups;
        // user_data.image = this.state.image;


        //Verificar si la url tiene parámetros
        const { match: { params } } =  this.props;
        try{
            var response = null;
            if(params  &&  params.pk){
                //on update
                response = await update(params.pk, form_data);
            }else{
                //on create
                response = await store(form_data);
            }
            if (typeof response.id !== 'undefined') {
                this.props.history.push('/users')
            }else {
                this.setState({errors:response});
            }
        }catch(error){
            this.setState({error: error.message});
        }
    }

    onFieldError(field){  
        if (typeof this.state.errors[field] !== 'undefined') {
            return this.state.errors[field];
        }       
        return null;
    }

    render(){
        const { isLoaded, action, user, groups, errors, error } = this.state;
        if(error){
            return <div>Error: {error.message}</div>;
        }else if(!isLoaded){
            return <div>Loading...</div>;
        }else{
            return (
                <UserFormPage
                    action = {action}
                    user = {user}
                    groups = {groups}
                    errors = {errors}
                    onChangeField = {this.onChangeField}
                    onFieldError = {this.onFieldError}
                    onSubmit = {this.onSubmit}
                    onChangeDateField = {this.onChangeDateField}
                    onChangeGroupsField = {this.onChangeGroupsField}
                    onChangeIsActiveField = {this.onChangeIsActiveField}
                    onChangeImageField = {this.onChangeImageField}
                />
            );
        }
    }
}

export default UserForm;