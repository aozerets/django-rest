import React from 'react';
import ProgramsContainer from '../Programs';
import LessonsContainer from '../Lessons';
import Teachers from '../Teachers';
import './Main.scss';
import '../../main.scss';

class Main extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <div className="main">
        <ProgramsContainer />
        <LessonsContainer />
        <Teachers />
      </div>
    );
  }
}
export default Main;