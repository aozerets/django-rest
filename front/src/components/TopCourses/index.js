import React from 'react';
import SignCourseForm from "../Forms/SignCourseForm/";
import './TopCourses.scss';
import '../../main.scss';

class TopCourses extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      isCoursesVisible: true,
      isSignCourseOpen: false
    };
  }
  
  highlightOption = ev => {
    if (ev.type === 'mouseenter') {
      ev.currentTarget.classList.add('highlighted')
    } else {
      ev.currentTarget.classList.remove('highlighted');
    }
  };
  
  toggleSignCourse = () => {
    this.setState({
      isSignCourseOpen: !this.state.isSignCourseOpen
    });
  };
  
  render() {
    const { isSignCourseOpen } = this.state;
    return (
      <div className="header__content hide">
        <h1 className="header__title animate-pop-in">Awesome online-courses from professionals</h1>
        <h3 className="header__subtitle animate-pop-in">A useful start for your web development</h3>
        <div className="header__course-flex animate-pop-in">
          <div className="course-card course-card__python col animate-card-in option" onMouseEnter={this.highlightOption} onMouseLeave={this.highlightOption}>
            <h2 className="course-card__title">Python3</h2>
            <h4 className="course-card__more-info">Starting 01.08.19!!!!</h4>
            <p className="course-card__more-info">Some more info about this awesome course you are considering!</p>
            <p className="course-card__action"><a className="course-card__btn" onClick={this.toggleSignCourse}>Sign it</a></p>
          </div>
          <div className="course-card course-card__js col animate-card-in option" onMouseEnter={this.highlightOption} onMouseLeave={this.highlightOption}>
            <h2 className="course-card__title">JavaScript</h2>
            <h4 className="course-card__more-info">Starting 01.09.19!!!!</h4>
            <p className="course-card__more-info">Some more info about this awesome course you are considering!</p>
            <p className="course-card__action"><a className="course-card__btn" onClick={this.toggleSignCourse}>Sign it</a></p>
          </div>
          <div className="course-card course-card__kotlin col animate-card-in option" onMouseEnter={this.highlightOption} onMouseLeave={this.highlightOption}>
            <h2 className="course-card__title">Kotlin</h2>
            <h4 className="course-card__more-info">Starting Soon!!!</h4>
            <p className="course-card__more-info">Some more info about this awesome course you are considering!</p>
            <p className="course-card__action"><a className="course-card__btn" onClick={this.toggleSignCourse}>Sign it</a></p>
          </div>
        </div>
  
        <SignCourseForm isOpen={isSignCourseOpen} handleToggle={this.toggleSignCourse}/>
      </div>
    );
  }
}
export default TopCourses;
