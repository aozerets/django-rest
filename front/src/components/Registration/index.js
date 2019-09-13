import React from 'react';
import '../../main.scss';
import './Registration.scss';
import { Fetch } from "../Utils";
import { togglePage } from "../../actions";
import { connect } from "react-redux";

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
  
  handleChange = ev => this.setState({ [ev.target.name] : ev.target.value });
  
  signUp = ev => {
    ev.preventDefault();
    const formData = new FormData(ev.currentTarget);
    Fetch('/rest-auth/registration/', 'POST', formData)
      .then(res => {
        if ('key' in res) {
          document.getElementById('registerContainer').setAttribute('hidden', 'true');
          alert('Congratulations!You are successfully registered.');
          this.props.togglePage();
        } else {
          Object.entries(res).forEach((er) =>{
            document.getElementById(`${er[0]}Error`).removeAttribute('hidden');
            document.getElementById(`${er[0]}Error`).innerText = er[1].join('\n');
            setTimeout(() => {
              document.getElementById(`${er[0]}Error`).setAttribute('hidden', 'true');
            }, 9000);
          });
        }
      });
    };
  
  render() {
    const { username, password1, password2, email} = this.state;
    return (
      <div className="container" id="registerContainer">
        <h1>Thank you for registering!</h1>
        <h2>Just fill out the registration form.</h2>
        <form className="container__form" onSubmit={this.signUp} name="registrationForm" >
          <div className="container__item">
            <label htmlFor="username">Username: </label><input type="text" name="username" id="username" placeholder="name" value={username} onChange={this.handleChange} />
          </div>
          <h4 className="container__error" id="usernameError" hidden />
          <div className="container__item">
            <label htmlFor="password1">Password: </label><input type="password" name="password1" id="password1" placeholder="my pass" value={password1} onChange={this.handleChange} />
          </div>
          <h4 className="container__error" id="password1Error" hidden />
          <div className="container__item">
            <label htmlFor="password2">Confirm password: </label><input type="password" name="password2" id="password2" placeholder="confirm your pass" value={password2} onChange={this.handleChange} />
          </div>
          <h4 className="container__error" id="password2Error" hidden />
          <div className="container__item">
            <label htmlFor="email">Email: </label><input type="text" name="email" id="email" placeholder="don't forget @ and . !" value={email} onChange={this.handleChange} />
          </div>
          <h4 className="container__error" id="emailError" hidden />
          <button className="btnAction" type="submit" id="btnRegister">Sign Up</button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  togglePage: () => { dispatch(togglePage()) }
});
const RegistrationContainer = connect(null, mapDispatchToProps)(Registration);

export default RegistrationContainer;
