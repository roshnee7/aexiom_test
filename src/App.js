import React, {Component} from 'react';
import './App.css';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      login_page : true,
      register_page : false,
      home_page : false,
      error : ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLoginSuccess = this.handleLoginSuccess.bind(this);
    this.showError = this.showError.bind(this);
    this.handleRegisterSuccess = this.handleRegisterSuccess.bind(this);
  }

  handleSubmit(){
    if(this.state.login_page){
      this.setState({
        login_page: false,
        register_page : true,
        error : ''
      })
    }
    else{
      this.setState({
        login_page: true,
        register_page : false,
        error : ''
      })
    }
   
  }

  handleLoginSuccess(){
    this.setState({
      login_page : false,
      register_page : false,
      home_page : true
    });
  }

  showError(err){
    this.setState({
      error : err
    });
  }

  handleRegisterSuccess(){
    this.setState({
      login_page : true,
      register_page : false,
      home_page : false,
      error : "Register success"
    });
  }


  render(){
    return(
      <div>
        <h1>Roshni App!</h1>
        <p><span style = {{color : 'red'}}>{this.state.error}</span></p>
        {this.state.login_page && <button type ="button" name ="Submit" onClick={this.handleSubmit}>Register</button>}
        {this.state.register_page && <button type ="button" name ="Submit" onClick={this.handleSubmit}>Login</button>}
        {this.state.login_page && <Login loginSuccess={this.handleLoginSuccess} errorMsg = {this.showError}/>}
        {this.state.register_page && <Register registerSuccess={this.handleRegisterSuccess} errorMsg = {this.showError}/>}
        {this.state.home_page && <Home/>}
      </div>
    )
  }
}

export default App;
