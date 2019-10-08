import React from "react";
import './CourseCard.scss';
import '../../main.scss';
import { toggleSignCourse } from "../../actions";
import { connect } from "react-redux";

export class CourseCard extends React.Component {
  constructor(props) {
    super(props);
  }
  
  highlightOption = (ev) => {
    if (ev.type === 'mouseenter') {
      ev.currentTarget.classList.add('highlighted');
    } else {
      ev.currentTarget.classList.remove('highlighted');
    }
  };
  
  render() {
    const {toggleSignCourse, name, title, started, more} = this.props;
    return (
      <div className={`course-card course-card__${name} animate-card-in option`}
           onMouseEnter={this.highlightOption}
           onMouseLeave={this.highlightOption}>
        <h2 className="course-card__title">{title}</h2>
        <h4 className="course-card__more-info">Starting {started}!!!!</h4>
        <p className="course-card__more-info">Some more info about this awesome course you are considering!: {more}</p>
        <p className="course-card__action"><a className="course-card__btn" onClick={toggleSignCourse}>Sign it</a></p>
        <p className="course-card__action"><a className="course-card__btn" onClick={this.goToLessons}>Lessons</a></p>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    toggleSignCourse: () => dispatch(toggleSignCourse())
  };
};
const CourseCardContainer = connect(null, mapDispatchToProps)(CourseCard);

export default CourseCardContainer;
