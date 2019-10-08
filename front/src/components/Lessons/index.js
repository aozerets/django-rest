import React from 'react';
import './Lessons.scss';
import '../../main.scss';
import {connect} from "react-redux";

class Lessons extends React.Component {
  constructor(props){
    super(props);
  }
  
  navSelect = ev => {
    const prevActive = document.querySelector('.navbar__item.active').classList;
    document.querySelectorAll(`.lessons__item.${prevActive.item(2)}`).forEach((e) => {
      e.classList.add('hide');
    });
    prevActive.remove('active');
    const newActive = ev.currentTarget.classList;
    document.querySelectorAll(`.lessons__item.${newActive.item(2)}`).forEach((e) => {
      e.classList.remove('hide');
    });
    newActive.add('active');
  };
  
  showContent = (ev) => {
    const child = ev.currentTarget.childNodes[1];
    child.style.left = "auto";
    child.style.position = "relative";
  };
  hideContent = (ev) => {
    const child = ev.currentTarget.childNodes[1];
    child.style.left = "-9999em";
    child.style.position = "absolute";
  };
  
  render() {
    const { lessonsOpen } = this.props;
    return (
      <div className={'lessons ' + (lessonsOpen ? '' : 'hide')}>
        <h1 className="lessons__title animate-pop-in">
          Lessons of SuperPower CSS Program
        </h1>
        <div className="learning">
          <div className="learning__item  animate-pop-in">
            <span className="learning__title">Period of Study</span>
            <div className="learning__text">29 april - 3 november</div>
          </div>
          <div className="learning__item  animate-pop-in">
            <span className="learning__title">Graduate Day</span>
            <div className="learning__text">3 november</div>
          </div>
          <div className="learning__item  animate-pop-in">
            <span className="learning__title">Homework Done</span>
            <div className="learning__text">9 of 27</div>
          </div>
          <div className="learning__item  animate-pop-in">
            <span className="learning__title">Work Score</span>
            <div className="learning__text">87%</div>
          </div>
        </div>
        <div className="navbar">
          <div className="navbar__item animate-pop-in month-first active" onClick={this.navSelect}>
            <div className="navbar__title">1 Month</div>
          </div>
          <div className="navbar__item animate-pop-in month-second" onClick={this.navSelect}>
            <div className="navbar__title">2 Month</div>
          </div>
          <div className="navbar__item animate-pop-in month-third" onClick={this.navSelect}>
            <div className="navbar__title">3 Month</div>
          </div>
          <div className="navbar__item animate-pop-in month-forth" onClick={this.navSelect}>
            <div className="navbar__title">4 Month</div>
          </div>
          <div className="navbar__item animate-pop-in month-zero" onClick={this.navSelect}>
            <div className="navbar__title">Certificate</div>
          </div>
        </div>
        <div className="lessons__list animate-lessons-right">
          <div className="lessons__nearest">
            Closest lesson is July 4, Thursday 8 pm.
          </div>
          <div className="lessons__container">
            <div className="lessons__item month-first" onMouseEnter={this.showContent} onMouseLeave={this.hideContent}>
              <div className="lessons__main">
                <div className="lessons__number"><span>1</span></div>
                <a href="#" className="lessons__link">
                  <div className="lessons__subtitle">Django REST Framework. Django Configurations.</div>
                </a>
                <div className="lessons__icon icok"><span>{String.fromCharCode(10004)}</span></div>
              </div>
              <div className="lessons__content">
                <div className="lessons__text">Date and Time</div>
                <div className="lessons__subtext">4 July, Thursday 8 pm.</div>
                <div className="lessons__text">Your opinion is important to us</div>
                <div className="lessons__subtext">Leave your <a href="#" className="lessons__comment">comments</a>
                </div>
              </div>
            </div>
            <div className="lessons__item month-first" onMouseEnter={this.showContent} onMouseLeave={this.hideContent}>
              <div className="lessons__main">
                <div className="lessons__number"><span>2</span></div>
                <a href="#" className="lessons__link">
                  <div className="lessons__subtitle">Django REST Framework. Django Configurations.</div>
                </a>
                <div className="lessons__icon icok"><span>{String.fromCharCode(10004)}</span></div>
              </div>
              <div className="lessons__content">
                <div className="lessons__text">Date and Time</div>
                <div className="lessons__subtext">4 July, Thursday 8 pm.</div>
                <div className="lessons__text">Your opinion is important to us</div>
                <div className="lessons__subtext">Leave your <a href="#" className="lessons__comment">comments</a></div>
              </div>
            </div>
            <div className="lessons__item month-second hide" onMouseEnter={this.showContent} onMouseLeave={this.hideContent}>
              <div className="lessons__main">
                <div className="lessons__number"><span>9</span></div>
                <a href="#" className="lessons__link">
                  <div className="lessons__subtitle">Django REST Framework. Django Configurations.</div>
                </a>
                <div className="lessons__icon"><span>{String.fromCharCode(10069)}</span></div>
              </div>
              <div className="lessons__content">
                <div className="lessons__text">Date and Time</div>
                <div className="lessons__subtext">4 July, Thursday 8 pm.</div>
                <div className="lessons__text">Your opinion is important to us</div>
                <div className="lessons__subtext">Leave your <a href="#" className="lessons__comment">comments</a>
                </div>
              </div>
            </div>
            <div className="lessons__item month-second hide" onMouseEnter={this.showContent} onMouseLeave={this.hideContent}>
              <div className="lessons__main">
                <div className="lessons__number"><span>10</span></div>
                <a href="#" className="lessons__link">
                  <div className="lessons__subtitle">Django REST Framework. Django Configurations.</div>
                </a>
                <div className="lessons__icon">{String.fromCodePoint(128293)}</div>
              </div>
              <div className="lessons__content">
                <div className="lessons__text">Date and Time</div>
                <div className="lessons__subtext">4 July, Thursday 8 pm.</div>
                <div className="lessons__text">Your opinion is important to us</div>
                <div className="lessons__subtext">Leave your <a href="#" className="lessons__comment">comments</a>
                </div>
              </div>
            </div>
            <div className="lessons__item month-third hide" onMouseEnter={this.showContent} onMouseLeave={this.hideContent}>
              <div className="lessons__main">
                <div className="lessons__number"><span>18</span></div>
                <a href="#" className="lessons__link">
                  <div className="lessons__subtitle">Django REST Framework. Django Configurations.</div>
                </a>
                <div className="lessons__icon"/>
              </div>
              <div className="lessons__content">
                <div className="lessons__text">Date and Time</div>
                <div className="lessons__subtext">4 July, Thursday 8 pm.</div>
                <div className="lessons__text">Your opinion is important to us</div>
                <div className="lessons__subtext">Leave your <a href="#" className="lessons__comment">comments</a>
                </div>
              </div>
            </div>
            <div className="lessons__item month-third hide" onMouseEnter={this.showContent} onMouseLeave={this.hideContent}>
              <div className="lessons__main">
                <div className="lessons__number"><span>19</span></div>
                <a href="#" className="lessons__link">
                  <div className="lessons__subtitle">Django REST Framework. Django Configurations.</div>
                </a>
                <div className="lessons__icon"/>
              </div>
              <div className="lessons__content">
                <div className="lessons__text">Date and Time</div>
                <div className="lessons__subtext">4 July, Thursday 8 pm.</div>
                <div className="lessons__text">Your opinion is important to us</div>
                <div className="lessons__subtext">Leave your <a href="#" className="lessons__comment">comments</a>
                </div>
              </div>
            </div>
            <div className="lessons__item month-forth hide" onMouseEnter={this.showContent} onMouseLeave={this.hideContent}>
              <div className="lessons__main">
                <div className="lessons__number"><span>29</span></div>
                <a href="#" className="lessons__link">
                  <div className="lessons__subtitle">Django REST Framework. Django Configurations.</div>
                </a>
                <div className="lessons__icon"/>
              </div>
              <div className="lessons__content">
                <div className="lessons__text">Date and Time</div>
                <div className="lessons__subtext">4 July, Thursday 8 pm.</div>
                <div className="lessons__text">Your opinion is important to us</div>
                <div className="lessons__subtext">Leave your <a href="#" className="lessons__comment">comments</a>
                </div>
              </div>
            </div>
            <div className="lessons__item month-forth hide" onMouseEnter={this.showContent} onMouseLeave={this.hideContent}>
              <div className="lessons__main">
                <div className="lessons__number"><span>30</span></div>
                <a href="#" className="lessons__link">
                  <div className="lessons__subtitle">Django REST Framework. Django Configurations.</div>
                </a>
                <div className="lessons__icon"/>
              </div>
            </div>
            <div className="lessons__item month-zero hide">
              <div className="lessons__cert">CONGRATULATIONS. NOW U ARE VERY POWERFUL SPECIALIST IN CSS!!!</div>
              <div className="lessons__cert">WORK SCORES IS 1000</div>
              <div className="lessons__cert">HOMEWORKS DONE 27 in 27</div>
              <div className="lessons__cert">TRY ANOTHER PROGRAM</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    lessonsOpen: state.lessonsOpen
  }
};
const LessonsContainer = connect(mapStateToProps)(Lessons);

export default LessonsContainer;