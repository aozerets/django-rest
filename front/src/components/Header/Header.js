import React from 'react';
import HeaderTitle from '../HeaderTitle/HeaderTitle';
import TopCourses from '../TopCourses/TopCourses';
import News from '../News/News';
import './Header.scss';
import '../../main.scss';
import Login from "../Login/Login";
import Registration from "../Registration/Registration";

class Header extends React.Component {
  constructor() {
    super();
  
    this.state = {
      isLoginOpen: false,
      isRegisterOpen: false
    };
  }
  
  toggleLogin = () => {
    this.setState({
      isLoginOpen: !this.state.isLoginOpen
    });
  };

  toggleRegistration = () => {
    this.setState({
      isRegisterOpen: !this.state.isRegisterOpen
    });
  };
  
  render() {
    return (
      <header className='header'>
        <HeaderTitle toggleLogin={this.toggleLogin} toggleRegistration={this.toggleRegistration}/>
        <Login isOpen={this.state.isLoginOpen} handleToggle={this.toggleLogin}/>
        <Registration isOpen={this.state.isRegisterOpen} handleToggle={this.toggleRegistration}/>
        <News />
        <TopCourses />
      </header>
    );
  }
}
export default Header;