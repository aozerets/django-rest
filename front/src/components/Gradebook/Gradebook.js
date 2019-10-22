import React from 'react';
import './Gradebook.scss';
import { connect } from "react-redux";
import { getGradeList } from "../../actions";


export class Gradebook extends React.Component {
  constructor(props){
    super(props);
  }
  
  componentDidMount() {
    this.props.getGradeList(this.props.profile.teacher_programs);
  }
  
  navSelect = ev => {
    const prevActive = document.querySelector('.navbar__item.active').classList;
    document.querySelectorAll(`.gradebook__table.${prevActive.item(2)}`).forEach((e) => {
      e.classList.add('hide');
    });
    prevActive.remove('active');
    const newActive = ev.currentTarget.classList;
    document.querySelectorAll(`.gradebook__table.${newActive.item(2)}`).forEach((e) => {
      e.classList.remove('hide');
    });
    newActive.add('active');
  };
  
  Thead = (title) => (
    <>
      <caption className="gradebook__caption  animate-pop-in">Student performance in {title}</caption>
      <thead>
        <tr className="gradebook__title  animate-pop-in">
          <th className="gradebook__th">Student</th>
          <th className="gradebook__th">Grade</th>
          <th className="gradebook__th">Email</th>
        </tr>
      </thead>
    </>
  );
  
  Tbody = (students) => (
    <>
      <tbody>
      {students.map((student) => {
        return (<tr className="gradebook__tr animate-pop-in" key={student.id}>
          <td className="gradebook__td">{student.user.username}</td>
          <td className="gradebook__td">{student.done_count}</td>
          <td className="gradebook__td">{student.user.email}</td>
        </tr>
      )})}
      </tbody>
    </>
  );
  
  render() {
    const { gradebook, titles, gradebookOpen } = this.props;
    return (
      <div className={'gradebook ' + (gradebookOpen ? '' : 'hide')}>
        <div className="navbar" >
          {titles.map((title, i) => {
            return (
              <div className={`navbar__item animate-pop-in ${title}` + (i === 0 ? " active" : "")} key={title} onClick={this.navSelect}>
                <div className="navbar__title  animate-pop-in">{title}</div>
              </div>
            )
          })}
        </div>
        {gradebook.map((program, i) => {
          return(
          <>
            <table className={`gradebook__table ${program.title}` + (i !== 0 ? " hide" : "")} key={program.id}>
              {this.Thead(program.title)}
              {this.Tbody(program.students)}
            </table>
          </>
        )})}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    gradebookOpen: state.gradebookOpen,
    gradebook: state.gradebook.grades,
    titles: state.gradebook.titles,
    profile: state.profile
  }
};
const mapDispatchToProps = dispatch => ({
  getGradeList: (programs) => dispatch(getGradeList(programs)),
});
const GradebookContainer = connect(mapStateToProps, mapDispatchToProps)(Gradebook);

export default GradebookContainer;