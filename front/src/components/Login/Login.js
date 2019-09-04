import React from 'react';
import { getCookie2, handleErrors } from '../Utils';
import '../../main.scss';
import './Login.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  };
  
  handleLogin = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
  
    fetch('/rest-auth/login/', {
      method: 'POST',
      headers: {'X-CSRFToken': getCookie2()},
      body: formData
    }).then(handleErrors)
      .then(() => this.props.handleToggle())
      //.then(() => window.location.href="/frontend/components/allprograms.html")
      .catch(() => {
        document.getElementById('loginError').removeAttribute('hidden');
        setTimeout(() => {
          document.getElementById('loginError').setAttribute('hidden', 'true');
          this.props.handleToggle();
        }, 3000);
      });
    //alert("Username: " + this.state.username + " Password: " + this.state.password);
  };
  
  handleChange = (event) => {
    const newState = {...this.state};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  };
  
  render() {
    return (
      <div className={this.props.isOpen ? "container" : "container__hide"} id="loginContainer">
        <div className="jumbotron">
          <h1>Authorization</h1>
          <h2 id="loginError" className="container__error" hidden>Wrong!</h2>
          <form className="container__form container--login" onSubmit={this.handleLogin} name="loginForm" encType="multipart/form-data">
            <input className="container__loginItem" type="text" name="username" placeholder="login" value={this.state.username} onChange={this.handleChange} />
            <input className="container__loginItem" type="text" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
            <button className="container__btnLogin" type="submit" id="btnLogin">Confirm</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;

// import './index.scss';
//
// const getCookie2 = () => {
//   let coo;
//   document.cookie.split(";").forEach((c) => {
//     if (c.split('=')[0].trimStart() === 'csrftoken') {
//       coo = c.split('=')[1];
//     }
//   });
//   return coo;
// };
//
// const handleErrors = res => {
//   if (!res.ok) {
//     throw Error(res.statusText);
//   }
//   return res;
// };
//
// document.forms['registrationForm'].addEventListener('submit', (e) => {
//   e.preventDefault();
//   const formData = new FormData(e.currentTarget);
//
//   fetch('/rest-auth/registration/', {
//     method: 'POST',
//     headers: {'X-CSRFToken': getCookie2()},
//     body: formData
//   }).then(response => response.json())
//     .then(res => {
//       if ('key' in res) {
//         document.getElementById('registerContainer').setAttribute('hidden', 'true');
//       } else {
//         Object.entries(res).forEach((er) =>{
//           document.getElementById(`${er[0]}Error`).removeAttribute('hidden');
//           document.getElementById(`${er[0]}Error`).innerText = er[1].join('\n');
//           setTimeout(() => {
//             document.getElementById(`${er[0]}Error`).setAttribute('hidden', 'true');
//           }, 3000);
//         });
//       }
//     });
// });
//
// document.forms['loginForm'].addEventListener('submit', (e) => {
//   e.preventDefault();
//   const formData = new FormData(e.currentTarget);
//
//   fetch('/rest-auth/login/', {
//     method: 'POST',
//     headers: {'X-CSRFToken': getCookie2()},
//     body: formData
//   }).then(handleErrors)
//     .then(() => window.location.href="/frontend/components/allprograms.html")
//     .catch(() => {
//       document.getElementById('loginError').removeAttribute('hidden');
//       setTimeout(() => {
//         document.getElementById('loginError').setAttribute('hidden', 'true');
//       }, 1000);
//     });
// });
//
// document.getElementById('registerNav').addEventListener('click', () =>{
//   document.getElementById('loginContainer').setAttribute('hidden', 'true');
//   document.getElementById('registerContainer').removeAttribute('hidden');
// })
//
// document.getElementById('loginNav').addEventListener('click', () =>{
//   document.getElementById('registerContainer').setAttribute('hidden', 'true');
//   document.getElementById('loginContainer').removeAttribute('hidden');
// })