import React from 'react';
import './Teachers.scss';
import '../../main.scss';
import murray1 from '../../../src/public/image/murray1.jpg';
import murray2 from '../../../src/public/image/murray2.jpg';
import murray3 from '../../../src/public/image/murray3.jpg';
import murray4 from '../../../src/public/image/murray4.jpg';
import murray5 from '../../../src/public/image/murray5.jpg';
import murray6 from '../../../src/public/image/murray6.jpg';
import murray7 from '../../../src/public/image/murray7.jpg';
import murray8 from '../../../src/public/image/murray8.jpg';

class Teacher extends React.Component {
  constructor() {
    super();
    
    this.state = {
      prevIndex: 0,
      currentIndex: 1,
      nextIndex: 2,
      lastIndex: 7,
      carouselRunning: true,
      carouselRestartTimeout: ''
    };
  }
  
  updatePips = () => {
    const prev = document.getElementById('carousel__pips').querySelector('.previous');
    if (prev != null)
      prev.classList.remove('previous');
    const current = document.getElementById('carousel__pips').querySelector('.current');
    if (current != null)
      current.classList.remove('current');
    const next = document.getElementById('carousel__pips').querySelector('.next');
    if (next != null)
      next.classList.remove('next');
    const allPips = document.getElementById('carousel__pips').querySelectorAll('.pip');
    allPips[this.state.prevIndex].classList.add('previous');
    allPips[this.state.currentIndex].classList.add('current');
    allPips[this.state.nextIndex].classList.add('next');
  };
  
  setLeftClass = () => {
    const allQuotes = document.getElementById('carousel__list').querySelectorAll('.teachers');
    const left = document.querySelector('.teachers.left');
    if (left != null)
      left.classList.remove('left');
    if (this.state.prevIndex > 0) {
      const index = this.state.prevIndex - 1;
      allQuotes[index].classList.add('left');
    } else {
      allQuotes[allQuotes.length - 1].classList.add('left');
    }
  };
  
  generatePips = () => {
    const listContainer = document.getElementById('carousel__pips').querySelector('ul');
    for (let i = this.state.lastIndex; i >= 0; i--) {
      const newPip = '<li class="pip"</li>';
      listContainer.insertAdjacentHTML('beforeend', newPip);
    }
    const allPips = document.getElementById('carousel__pips').querySelectorAll('.pip');
    allPips.forEach( (el) => {
      el.addEventListener('click', this.showFromPip,false);
    });
    this.updatePips();
  };
  
  updateCarouselPosition = () => {
    const prev = document.getElementById('carousel__list').querySelector('.previous');
    if (prev != null)
      prev.classList.remove('previous');
    const current = document.getElementById('carousel__list').querySelector('.current');
    if (current != null)
      current.classList.remove('current');
    const next = document.getElementById('carousel__list').querySelector('.next');
    if (next != null)
      next.classList.remove('next');
    const allQuotes = document.getElementById('carousel__list').querySelectorAll('.teachers');
    allQuotes[this.state.prevIndex].classList.add('previous');
    allQuotes[this.state.prevIndex].addEventListener('click', this.showQuote,false);
    allQuotes[this.state.currentIndex].classList.add('current');
    allQuotes[this.state.nextIndex].classList.add('next');
    allQuotes[this.state.nextIndex].addEventListener('click', this.showQuote,false);
  };
  
  updateStatus = (index) => {
    this.setState({
      prevIndex: index === 0 ? this.state.lastIndex : index - 1,
      currentIndex: index,
      nextIndex: index === this.state.lastIndex ? 0 : index + 1
    });
    this.updateCarouselPosition();
    this.setLeftClass();
    this.updatePips();
  };
  
  showQuote = (ev) => {
    const target = ev.currentTarget;
    const teachers = Array.from(document.querySelectorAll('.teachers'));
    const index = teachers.indexOf(target);
    this.updateStatus(index);
    
    clearTimeout(this.state.carouselRestartTimeout);
    this.setState({
      carouselRunning: false,
      carouselRestartTimeout: setTimeout( () => {
        this.setState({carouselRunning: true});
      }, 10000)
    })
  };
  
  showNextQuote = () => {
    this.setState({
      currentIndex: this.state.currentIndex === this.state.lastIndex ? 0 : ++this.state.currentIndex
    });
    this.updateStatus(this.state.currentIndex);
  };

  interval = () => setInterval(() => {
    if (this.state.carouselRunning) {
      this.showNextQuote();
    }
  }, 4000);
  
  showFromPip = ev => {
    const pips = Array.from(document.querySelectorAll('.pip'));
    const pIndex = pips.indexOf(ev.currentTarget);
    this.updateStatus(pIndex);
  };
  
  componentDidMount () {
    this.generatePips();
    this.setLeftClass();
    this.interval();
  }
  
  render() {
    return (
      <main>
        <div className="carousel animate-pop-in">
          <h2 className="carousel__title animate-pop-in"> Awesome Professors</h2>
          <ul className="carousel__list" id="carousel__list">
            <li className="teachers previous" onClick={this.showQuote}>
              <div className="teachers__image" style={{ backgroundImage: 'url('+murray1+')' }} />
              <div className="teachers__title">
                Professor
              </div>
              <div className="teachers__subtitle">
                Python Developer
              </div>
            </li>
            <li className="teachers current"  onClick={this.showQuote}>
              <div className="teachers__image" style={{ backgroundImage: 'url('+murray2+')' }} />
              <div className="teachers__title">
                Murray
              </div>
              <div className="teachers__subtitle">
                Python Developer
              </div>
            </li>
            <li className="teachers next"  onClick={this.showQuote}>
              <div className="teachers__image" style={{backgroundImage: 'url('+murray3+')'}} />
              <div className="teachers__title">
                Great
              </div>
              <div className="teachers__subtitle">
                JavaScript Developer
              </div>
            </li>
            <li className="teachers" onClick={this.showQuote}>
              <div className="teachers__image" style={{backgroundImage: 'url('+murray4+')'}} />
              <div className="teachers__title">
                Another
              </div>
              <div className="teachers__subtitle">
                JavaScript Developer
              </div>
            </li>
            <li className="teachers" onClick={this.showQuote}>
              <div className="teachers__image" style={{backgroundImage: 'url('+murray5+')'}} />
              <div className="teachers__title">
                Somebody
              </div>
              <div className="teachers__subtitle">
                JavaScript Developer
              </div>
            </li>
            <li className="teachers" onClick={this.showQuote}>
              <div className="teachers__image" style={{backgroundImage: 'url('+murray6+')'}} />
              <div className="teachers__title">
                Java
              </div>
              <div className="teachers__subtitle">
                Java Developer
              </div>
            </li>
            <li className="teachers" onClick={this.showQuote}>
              <div className="teachers__image" style={{backgroundImage: 'url('+murray7+')'}} />
              <div className="teachers__title">
                First
              </div>
              <div className="teachers__subtitle">
                Kotlin Developer
              </div>
            </li>
            <li className="teachers" onClick={this.showQuote}>
              <div className="teachers__image" style={{backgroundImage: 'url('+murray8+')'}} />
              <div className="teachers__title">
                Kotlin
              </div>
              <div className="teachers__subtitle">
                Kotlin Developer
              </div>
            </li>
          </ul>
        </div>
        <div className="carousel__pips animate-pop-right" id="carousel__pips">
          <ul className="carousel__pips-list" />
        </div>
      </main>
    );
  }
}
export default Teacher;