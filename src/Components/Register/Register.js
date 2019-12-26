import React, {Component} from 'react';

class Register extends Component {
    constructor(props){
        super(props);

        this.state = {
            name : '',
            email : '',
            password : '',
            confirm_password: ''
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.RegisterHandler = this.RegisterHandler.bind(this);
    }

    onChangeHandler(e){
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    RegisterHandler(){
        if(this.state.name && this.state.email && this.state.password && this.state.confirm_password && (this.state.password === this.state.confirm_password)){
            this.props.registerSuccess();
        }
        else if(this.state.password !== this.state.confirm_password){
            this.props.errorMsg('Passwords do not match');
        }
        else{
            this.props.errorMsg('Please Enter Valid credentials');
        }
    }

    render(){
        return (
            <div>
                <p>Register Page</p>
                <input type = 'text' name ='name' value={this.state.name} placeholder='Name' onChange={this.onChangeHandler}/><br></br>
                <input type = 'text' name ='email' value={this.state.email} placeholder='Email' onChange={this.onChangeHandler}/><br></br>
                <input type = 'password' name ='password' value={this.state.password} placeholder='Password' onChange={this.onChangeHandler}/><br></br>
                <input type = 'password' name ='confirm_password' value={this.state.confirm_password} placeholder='Confirm password' onChange={this.onChangeHandler}/><br></br>
                <button type ='button' onClick={this.RegisterHandler}>Register</button>
            </div>
        );
    }
}

export default Register;

