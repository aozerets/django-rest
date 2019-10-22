import React from 'react';
import './HeaderTitle.scss';
import '../../main.scss';
import { togglePage, toggleHeader, toggleLessons, togglePrograms, toggleGradebook } from '../../actions'
import {connect} from "react-redux";
import { Link } from "react-router-dom";

class HeaderTitle extends React.Component {
  constructor(props){
    super(props);
  }
  
  render() {
    console.log(this.props);
    const { isVisible, isCovered, programsOpen, lessonsOpen, gradebookOpen, togglePage, toggleHeader, togglePrograms, toggleLessons, toggleGradebook, status } = this.props;
    return (
      <div className="header__main">
        <div className="header__container flex-grid">
          <div className="header__company-logo" onClick={() => toggleHeader()} />
          <div className="header__item">
            <div onClick={() => togglePrograms(programsOpen)}><Link className="header__link" to="/programs">Programs{String.fromCharCode(9661)}</Link></div>
          </div>
          <div className="header__item">
            <div onClick={() => toggleLessons(lessonsOpen)}><Link className="header__link" to="/lessons">Lessons{String.fromCharCode(9661)}</Link></div>
          </div>
          <div className="header__item">
            Exercises
          </div>
          { status === 'teacher'
            ?
            <div className="header__item">
              <div onClick={() => toggleGradebook(gradebookOpen)}><Link className="header__link" to="/gradebook">Gradebook{String.fromCharCode(9661)}</Link></div>
            </div>
            : ''
          }
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
    lessonsOpen: state.lessonsOpen,
    gradebookOpen: state.gradebookOpen,
    status: 'status' in state.profile ? state.profile.status : 'student'
  }
};

const mapDispatchToProps = dispatch => {
  return {
    togglePage: (page) => dispatch(togglePage(page)),
    toggleHeader: () => dispatch(toggleHeader()),
    togglePrograms: (status) => dispatch(togglePrograms(status)),
    toggleLessons: (status) => dispatch(toggleLessons(status)),
    toggleGradebook: (status) => dispatch(toggleGradebook(status))
  };
}
const HeaderTitleContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderTitle);

export default HeaderTitleContainer;