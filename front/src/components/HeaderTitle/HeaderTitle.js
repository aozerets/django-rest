import React from 'react';
import './HeaderTitle.scss';
import '../../main.scss';

class HeaderTitle extends React.Component {
  constructor(props){
    super(props);
  };
  
  render() {
    return (
      <div className="header__main">
        <div className="header__container flex-grid">
          <div className="header__company-logo"></div>
          <div className="header__item">
            <a className="header__link" href="allprograms.html">Programs{String.fromCharCode(9661)}</a>
          </div>
          <div className="header__item">
            <a className="header__link" href="alllessons.html">Lessons{String.fromCharCode(9661)}</a>
          </div>
          <div className="header__item">
            Exercises
          </div>
        </div>
        <div className="header__login-button" id="header__login-button" onClick={this.props.toggleLogin}>
          Login
        </div>
        <div className="header__login-button" id="header__registration-button" onClick={this.props.toggleRegistration}>
          SignUp
        </div>
  
      </div>
    );
  }
}
export default HeaderTitle;