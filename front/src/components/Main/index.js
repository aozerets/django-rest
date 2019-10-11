import React from 'react';
import ProgramsContainer from '../Programs';
import LessonsContainer from '../Lessons';
import Teachers from '../Teachers';
import { Switch, Route } from "react-router-dom";
import './Main.scss';
import '../../main.scss';
import GradebookContainer from "../Gradebook/Gradebook";

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <Switch>
          <Route path="/programs">
            <ProgramsContainer />
          </Route>
          <Route path="/lessons">
            <LessonsContainer />
          </Route>
          <Route path="/gradebook">
            <GradebookContainer />
          </Route>
        </Switch>
        <Teachers />
      </div>
    );
  }
}
export default Main;