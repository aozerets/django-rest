import React from 'react';
import './Programs.scss';
import '../../main.scss';
import {connect} from "react-redux";
import CourseCard from "../CourseCard/CourseCard";

class Programs extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    const { programsOpen } = this.props;
    return (
      <div className={'allprograms ' + (programsOpen ? '' : 'hide')}>
        <h1 className="allprograms__title">Choose your destiny!!!</h1>
        <div className="allprograms__container">
          <CourseCard name="python" title="Python3" started="01.08.19" more="More Python"/>
          <CourseCard name="js" title="JavaScript" started="01.08.19" more="More JavaScript"/>
          <CourseCard name="kotlin" title="Kotlin" started="01.08.19" more="More Kotlin"/>
          <CourseCard name="python" title="Python3" started="01.08.19" more="More Python"/>
          <CourseCard name="js" title="JavaScript" started="01.08.19" more="More JavaScript"/>
          <CourseCard name="kotlin" title="Kotlin" started="01.08.19" more="More Kotlin"/>
          <CourseCard name="python" title="Python3" started="01.08.19" more="More Python"/>
          <CourseCard name="js" title="JavaScript" started="01.08.19" more="More JavaScript"/>
          <CourseCard name="kotlin" title="Kotlin" started="01.08.19" more="More Kotlin"/>
          <CourseCard name="python" title="Python3" started="01.08.19" more="More Python"/>
          <CourseCard name="js" title="JavaScript" started="01.08.19" more="More JavaScript"/>
          <CourseCard name="kotlin" title="Kotlin" started="01.08.19" more="More Kotlin"/>
          <CourseCard name="python" title="Python3" started="01.08.19" more="More Python"/>
          <CourseCard name="js" title="JavaScript" started="01.08.19" more="More JavaScript"/>
          <CourseCard name="kotlin" title="Kotlin" started="01.08.19" more="More Kotlin"/>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    programsOpen: state.programsOpen
  }
};
const ProgramsContainer = connect(mapStateToProps)(Programs);

export default ProgramsContainer;
