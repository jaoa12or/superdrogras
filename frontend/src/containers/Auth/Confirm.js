import React from 'react';
import ResetConfirm from '../../components/Auth/ResetConfirm';

class ConfirmSendEmail extends React.Component{

    constructor(props) {
        super(props);
        this.state  = {
            sended: localStorage.getItem('email') ? true : false,
            email: localStorage.getItem('email'),
        };
    };

    componentDidMount(){
        if (this.state.sended === false){
            this.props.history.push('/login');
        }else{
            localStorage.removeItem('email');
        }
    }


    render(){
        const { email } = this.state;        
        return (
            <ResetConfirm
            	email = {email}
            />
        );
    }
}

export default ConfirmSendEmail;