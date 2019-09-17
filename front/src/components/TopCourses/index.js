import React from 'react';
import './TopCourses.scss';
import '../../main.scss';
import CourseCard from "../CourseCard/CourseCard";

class TopCourses extends React.Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <div className="header__content hide">
        <h1 className="header__title animate-pop-in">Awesome online-courses from professionals</h1>
        <h3 className="header__subtitle animate-pop-in">A useful start for your web development</h3>
        <div className="header__course-flex animate-pop-in">
          <CourseCard name="python" title="Python3" started="01.08.19" more="More Python"/>
          <CourseCard name="js" title="JavaScript" started="01.08.19" more="More JavaScript"/>
          <CourseCard name="kotlin" title="Kotlin" started="01.08.19" more="More Kotlin"/>
        </div>
  
      </div>
    );
  }
}
export default TopCourses;
