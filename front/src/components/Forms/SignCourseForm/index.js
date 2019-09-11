import React from 'react';
import '../../../main.scss';
import './SignCourseForm.scss';

class SignCourseForm extends React.Component {
  constructor(props) {
    super(props);
  };
  
  handleSignCourse = () => {
    this.props.handleToggle();
    alert("Congratulations!!!! U R signed");
    //event.preventDefault();
  };
  
  render() {
    const { isOpen } = this.props;
    return (
      <div id="myModal" className={isOpen ? "modal__show" : "modal"}>
        <div className="modal__content">
          <div className="modal__header">
            <span className="modal__close" id="close" onClick={this.handleSignCourse}>&times;</span>
            <h2 className="modal__title">Signing on some course</h2>
          </div>
          <div className="modal__body">
            <p className="modal__body">Give me all your money!! =)</p>
            <p className="modal__body">Some other text...</p>
          </div>
          <div className="modal__footer">
            <h3 className="modal__title">Very good choice</h3>
          </div>
        </div>
      </div>
    );
  }
}
export default SignCourseForm;