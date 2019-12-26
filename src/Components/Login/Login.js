import React, {Component} from 'react';

class Login extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            email : '',
            password : ''
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.loginHandler = this.loginHandler.bind(this);
    }

    onChangeHandler(e){
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    loginHandler(){
        if(this.state.email && this.state.password){
            this.props.loginSuccess();
        }else{
            this.props.errorMsg('Please Enter Valid credentials');
        }
    }

    render(){
        return (
            <div>
                <h2>Login Page</h2>
                <input type = 'text' name ='email' value={this.state.email} placeholder='Email' onChange={this.onChangeHandler}/><br></br>
                <input type = 'password' name ='password' value={this.state.password} placeholder='password' onChange={this.onChangeHandler}/><br></br>
                <button type ='button' onClick={this.loginHandler}>Login</button>
            </div>
        );
    }
}

export default Login;

