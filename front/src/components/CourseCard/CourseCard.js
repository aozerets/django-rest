import React from "react";

class CourseCard extends React.Component {
  constructor(props) {
    super(props);
  };
  
  highlightOption = (ev) => {
    if (ev.type === 'mouseenter') {
      ev.currentTarget.classList.add('highlighted')
    } else {
      ev.currentTarget.classList.remove('highlighted');
    }
  };
  
  render() {
    return (
      <div className="course-card course-card__python col animate-card-in option"
           onMouseEnter={this.highlightOption}
           onMouseLeave={this.highlightOption}>
        <h2 className="course-card__title">Python3</h2>
        <h4 className="course-card__more-info">Starting 01.08.19!!!!</h4>
        <p className="course-card__more-info">Some more info about this awesome course you are considering!</p>
        <p className="course-card__action"><a className="course-card__btn" onClick={this.goToLessons}>Lessons</a></p>
      </div>
    )
  }
}

export default CourseCard;