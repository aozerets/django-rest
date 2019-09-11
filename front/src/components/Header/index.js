import React from 'react';
import HeaderTitle from '../HeaderTitle';
import TopCourses from '../TopCourses';
import Profile from '../Profile';
import News from '../News';
import './Header.scss';
import '../../main.scss';
import Login from "../Login";
import Registration from "../Registration";

class Header extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      isVisible: 'topcourses'
    };
  }
  
  togglePage = page => this.setState({ isVisible: page });
  
  renderSwitch = name => {
    switch (name) {
      case 'profile':
        return <Profile togglePage={this.togglePage}/>;
      case 'login':
        return <Login togglePage={this.togglePage}/>;
      case 'registration':
        return <Registration togglePage={this.togglePage}/>;
      case 'topcourses':
        return <TopCourses />;
    }
  };
  
  render() {
    const { isVisible } = this.state;
    return (
      <header className='header'>
        <HeaderTitle isVisible={isVisible} togglePage={this.togglePage} />
        <News />
        {this.renderSwitch(isVisible)}
      </header>
    );
  }
}
export default Header;