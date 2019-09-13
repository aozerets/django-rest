import React from 'react';
import {Fetch} from '../Utils';
import '../../main.scss';
import './Login.scss';
import { togglePage } from "../../actions";
import {connect} from "react-redux";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  };
  
  handleLogin = ev => {
    ev.preventDefault();
    const formData = new FormData(ev.currentTarget);
    Fetch('/rest-auth/login/', 'POST', formData)
      .then(() => console.log('logging'))
      .then(() => this.props.togglePage())
      // .then(() => console.log('After'))
      // .catch(() => {
      //   console.log('some error');
      //   const logErr = document.getElementById('loginError');
      //   if (logErr !== null) {
      //     logErr.removeAttribute('hidden');
      //     setTimeout(() => {
      //       document.getElementById('loginError').setAttribute('hidden', 'true');
      //     }, 3000);
      //   }
      // });
  };
  
  handleChange = ev => this.setState({ [ev.target.name]: ev.target.value });
  
  render() {
    const { username, password } = this.state;
    return (
      <div className="container" id="loginContainer">
        <div className="jumbotron">
          <h1>Authorization</h1>
          <h2 id="loginError" className="container__error" hidden>Wrong!</h2>
          <form className="container__form container--login" onSubmit={this.handleLogin} name="loginForm" encType="multipart/form-data">
            <input className="container__loginItem" type="text" name="username" placeholder="login" value={username} onChange={this.handleChange} />
            <input className="container__loginItem" type="text" name="password" placeholder="password" value={password} onChange={this.handleChange} />
            <button className="btnAction" type="submit" id="btnLogin">Confirm</button>
          </form>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  togglePage: () => dispatch(togglePage())
});

const LoginContainer = connect(null, mapDispatchToProps)(Login);

export default LoginContainer;
