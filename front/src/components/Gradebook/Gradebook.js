import React from 'react';
import {Gradelist} from "../../constants/Gradebook";
import './Gradebook.scss';
//import '../../main.scss';
import {connect} from "react-redux";

export class Gradebook extends React.Component {
  constructor(props){
    super(props);
  }
  
  componentDidMount() {
    console.log('mounting');
    console.log(Gradelist);
    this.setState({"programs": Gradelist})
  }
  
  render() {
    console.log(this.state);
    //const { programs } = this.state;
    return (
      <div className="gradebook">
        <table className="gradebook__table">
          <caption>Student performance in </caption>
          <thead>
            <tr className="gradebook__title">
              <th>Student</th>
              <th>Grade</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lorem</td>
              <td>299310</td>
              <td>1.1388</td>
            </tr>
            <tr>
              <td>Lorem</td>
              <td>sfefefsfdf</td>
              <td>4545.4545</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    lessonsOpen: state.lessonsOpen
  }
};
const GradebookContainer = connect(mapStateToProps)(Gradebook);

export default GradebookContainer;