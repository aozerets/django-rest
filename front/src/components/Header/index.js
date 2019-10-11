import React from 'react';
import { connect } from 'react-redux'

import HeaderTitleContainer from '../HeaderTitle';
import TopCourses from '../TopCourses';
import ProfileContainer from '../Profile';
import News from '../News';
import './Header.scss';
import '../../main.scss';
import LoginContainer from "../Login";
import RegistrationContainer from "../Registration";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  
  renderSwitch = name => {
    console.log('switched');
    switch (name) {
      case 'profile':
        return <ProfileContainer />;
      case 'login':
        return <LoginContainer />;
      case 'registration':
        return <RegistrationContainer />;
      case 'topcourses':
        return <TopCourses />;
    }
  };
  
  render() {
    const { isVisible, isCovered } = this.props;
    return (
      <header className={`header ${isCovered ? 'covered' : ''}`}>
        <HeaderTitleContainer {...this.props} />
        <News />
        {this.renderSwitch(isVisible)}
      </header>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isVisible: state.isVisible,
    isCovered: state.isCovered
  }
};
const HeaderContainer = connect(mapStateToProps, null)(Header);

export default HeaderContainer;