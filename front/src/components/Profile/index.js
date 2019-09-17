import React from 'react';
import DatePicker from "react-datepicker";
import { Fetch } from "../Utils";
import '../../main.scss';
import './Profile.scss';
import "react-datepicker/dist/react-datepicker.css";
import {getProfile, setProfile, togglePage} from "../../actions";
import {connect} from "react-redux";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      'name': '',
      'surname': '',
      'country': '',
      'city': '',
      'phone': '',
      'company': '',
      'position': '',
      'birthDate': '',
      'user_avatar': ''
    })
  }
  
  handleProfile = ev => {
    ev.preventDefault();
    const formData = new FormData(ev.currentTarget);
    this.props.setProfile(formData);
  };
  
  handleChange = ev => this.setState({ [ev.target.name]: ev.target.value });
  //handleChange = ev => this.props.profile[ev.target.name] = ev.target.value;
  
  handleBirth = date => this.setState({ birthDate: date });
  
  goToLessons = () => {
    console.log("switching");
  };
  
  componentDidMount() {
    this.props.getProfile();
  }
  componentWillReceiveProps(nextProps, nextContext) {
    this.setState({...nextProps.profile});
  }
  
  dateInput = ({onClick}) => (
    <input className="profile__date--input" onClick={onClick}>
    </input>
  );
  
  render() {
    console.log(this.state);
    const { name, surname, country, city, phone, company, position, birthDate, user_avatar } = this.state;
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
              {user_avatar !== '' ? <img className='profile__avatar' src={ user_avatar } /> : ''}
            </div>
          </div>
          <button className="btnAction" type="submit" id="btnProfile">Confirm</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    profile: state.profile
  }
};
const mapDispatchToProps = dispatch => ({
  togglePage: () => dispatch(togglePage()),
  getProfile: () => dispatch(getProfile()),
  setProfile: (formData) => dispatch(setProfile(formData))
});

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;