import React from 'react';
import DatePicker from "react-datepicker";
import { getCookie2, handleErrors } from "../Utils";
import '../../main.scss';
import './Profile.scss';
import "react-datepicker/dist/react-datepicker.css";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = ({
      username: '',
      name: '',
      surname: '',
      country: '',
      city: '',
      phone: '',
      company: '',
      position: '',
      birthDate: '',
      student_programs: '',
      user_avatar: ''
    })
  }
  
  handleProfile = ev => {
    ev.preventDefault();
    const formData = new FormData(ev.currentTarget);
    fetch('/api/v1/profile/', {
      method: 'PUT',
      headers: {'X-CSRFToken': getCookie2()},
      body: formData
    }).then(handleErrors)
      .then(() => this.props.togglePage('topcourses'))
  };
  
  handleChange = ev => this.setState({ [ev.target.name]: ev.target.value });
  
  handleBirth = date => this.setState({ birthDate: date });
  
  goToLessons = () => {
    console.log("switching");
  };
  
  componentDidMount() {
    fetch('/api/v1/profile/', {
      method: 'GET',
      headers: {'X-CSRFToken': getCookie2()},
    }).then(handleErrors)
      .then(res => res.json())
      .then(res => {
        const newState = {};
        Object.keys(res).map((key) => (res[key] == null) ? newState[key] = '' : newState[key] = res[key] );
        if (newState['birth_date']) {
          newState['birthDate'] = new Date(newState['birth_date'])
        }
        this.setState({...newState});
      })
      .catch((e) => {
        console.log(e);
      });
  }
  
  dateInput = ({onClick}) => (
    <input className="profile__date--input" onClick={onClick}>
    </input>
  );
  
  render() {
    const { name, surname, country, city, phone, company, position, birthDate, user_avatar} = this.state;
    return (
      <div className="profile">
        <h1>Personal Account</h1>
        <h2 id="profileError" className="profile__error--server" hidden>Wrong!</h2>
        <form className="profile__form" onSubmit={this.handleProfile} name="loginForm" encType="multipart/form-data">
          <div className="profile__flexible">
            <div>
              <div className="profile__item">
                <label htmlFor="name">Name: </label><input className="profile__item" type="text" name="name" placeholder="name" value={name} onChange={this.handleChange} />
              </div>
              <h4 className="profile__error" id="nameError" hidden />
              <div className="profile__item">
                <label htmlFor="surname">Surname: </label><input className="profile__item" type="text" name="surname" placeholder="surname" value={surname} onChange={this.handleChange} />
              </div>
              <h4 className="profile__error" id="surnameError" hidden />
              <div className="profile__item">
                <label htmlFor="country">Country: </label><input className="profile__item" type="text" name="country" placeholder="country" value={country} onChange={this.handleChange} />
              </div>
              <h4 className="profile__error" id="countryError" hidden />
              <div className="profile__item">
                <label htmlFor="city">City: </label><input className="profile__item" type="text" name="city" placeholder="city" value={city} onChange={this.handleChange} />
              </div>
              <h4 className="profile__error" id="cityError" hidden />
              <div className="profile__item">
                <label htmlFor="phone">Phone: </label><input className="profile__item" type="text" name="phone" placeholder="phone" value={phone} onChange={this.handleChange} />
              </div>
              <h4 className="profile__error" id="phoneError" hidden />
              <div className="profile__item">
                <label htmlFor="company">Company: </label><input className="profile__item" type="text" name="company" placeholder="company" value={company} onChange={this.handleChange} />
              </div>
              <h4 className="profile__error" id="companyError" hidden />
              <div className="profile__item">
                <label htmlFor="position">Position: </label><input className="profile__item" type="text" name="position" placeholder="position" value={position} onChange={this.handleChange} />
              </div>
              <h4 className="profile__error" id="positionError" hidden />
            </div>
            <div className="profile__blocked">
              <label htmlFor="birth_date">Date of Birth: </label>
              <DatePicker
                placeholderText="select..."
                dateFormat="yyyy-MM-dd"
                name='birth_date'
                selected={birthDate}
                customInput={this.dateInput(this)}
                onChange={date => this.handleBirth(date) }/>
              <label>Set avatar: </label>
              <input type="file" name="user_avatar" id="user_avatar"/>
              <label className="avatar" htmlFor="user_avatar">choose... </label>
              {user_avatar !== '' ? <img className='profile__avatar' src={ require('../../public/image' + user_avatar) } /> : ''}
            </div>
          </div>
          <button className="btnAction" type="submit" id="btnProfile">Confirm</button>
        </form>
      </div>
    );
  }
}

export default Profile;