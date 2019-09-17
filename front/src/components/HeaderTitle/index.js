import React from 'react';
import './HeaderTitle.scss';
import '../../main.scss';
import { togglePage, toggleHeader, toggleLessons, togglePrograms } from '../../actions'
import {connect} from "react-redux";

class HeaderTitle extends React.Component {
  constructor(props){
    super(props);
  };
  
  render() {
    const { isVisible, isCovered, programsOpen, lessonsOpen, togglePage, toggleHeader, togglePrograms, toggleLessons } = this.props;
    return (
      <div className="header__main">
        <div className="header__container flex-grid">
          <div className="header__company-logo" onClick={() => toggleHeader()} />
          <div className="header__item">
            <a className="header__link" onClick={() => togglePrograms(programsOpen)}>Programs{String.fromCharCode(9661)}</a>
          </div>
          <div className="header__item">
            <a className="header__link" onClick={() => toggleLessons(lessonsOpen)}>Lessons{String.fromCharCode(9661)}</a>
          </div>
          <div className="header__item">
            Exercises
          </div>
        </div>
        <div className="header__button" id="header__profile-button" onClick={() => isVisible !== 'profile' ? togglePage('profile') : togglePage('topcourses')}>
          Profile
        </div>
        <div className="header__button" id="header__login-button" onClick={() => isVisible !== 'login' ? togglePage('login') : togglePage('topcourses')}>
          Login
        </div>
        <div className="header__button" id="header__registration-button" onClick={() => isVisible !== 'registration' ? togglePage('registration') : togglePage('topcourses')}>
          SignUp
        </div>
  
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isVisible: state.isVisible,
    programsOpen: state.programsOpen,
    lessonsOpen: state.lessonsOpen
  }
};

const mapDispatchToProps = dispatch => {
  return {
    togglePage: (page) => dispatch(togglePage(page)),
    toggleHeader: () => dispatch(toggleHeader()),
    togglePrograms: (status) => dispatch(togglePrograms(status)),
    toggleLessons: (status) => dispatch(toggleLessons(status))
  };
}
const HeaderTitleContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderTitle);

export default HeaderTitleContainer;