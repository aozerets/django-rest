import React from 'react';
import {getCookie2, handleErrors} from '../Utils';
import '../../main.scss';
import './Registration.scss';

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password1: '',
      password2: '',
      email: ''
    }
  };
  
  handleChange = (event) => {
    const newState = {...this.state};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  };
  
  handleRegistration = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
  
    fetch('/rest-auth/registration/', {
      method: 'POST',
      headers: {'X-CSRFToken': getCookie2()},
      body: formData
    }).then(response => response.json())
      .then(res => {
        if ('key' in res) {
          document.getElementById('registerContainer').setAttribute('hidden', 'true');
          this.props.handleToggle();
        } else {
          Object.entries(res).forEach((er) =>{
            document.getElementById(`${er[0]}Error`).removeAttribute('hidden');
            document.getElementById(`${er[0]}Error`).innerText = er[1].join('\n');
            setTimeout(() => {
              document.getElementById(`${er[0]}Error`).setAttribute('hidden', 'true');
              this.props.handleToggle();
            }, 9000);
          });
        }
      });
    //alert("Username: " + this.state.username + " Password: " + this.state.password1 + " email: " + this.state.email);
  };
  
  render() {
    return (
      <div className={this.props.isOpen ? "container" : "container__hide"} id="registerContainer">
        <h1>Thank you for registering!</h1>
        <h2>Just fill out the registration form.</h2>
        <form className="container__form" onSubmit={this.handleRegistration} name="registrationForm" >
          <div className="container__item">
            <label htmlFor="username">Username: </label><input type="text" name="username" id="username" value={this.state.username} onChange={this.handleChange} />
          </div>
          <h4 className="container__error" id="usernameError" hidden />
          <div className="container__item">
            <label htmlFor="password1">Password: </label><input type="password" name="password1" id="password1" value={this.state.password1} onChange={this.handleChange} />
          </div>
          <div className="container__item">
            <label htmlFor="password2">Confirm password: </label><input type="password" name="password2" id="password2" value={this.state.password2} onChange={this.handleChange} />
          </div>
          <h4 className="container__error" id="password1Error" hidden />
          <div className="container__item">
            <label htmlFor="email">Email: </label><input type="text" name="email" id="email" value={this.state.email} onChange={this.handleChange} />
          </div>
          <h4 className="container__error" id="emailError" hidden />
          <button className="container__btnReg" type="submit" id="btnRegister">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default Registration;