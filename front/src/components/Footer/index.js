import React from 'react';
import './Footer.scss';
import '../../main.scss';
import rockyDashed from '../../../src/public/image/rocky-dashed.svg';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="flex-grid">
          <div className="col animate-pop-right">
            <h4 className="footer__link">About</h4>
          </div>
          <div className="col animate-pop-right">
            <h4 className="footer__link">Channels</h4>
          </div>
          <div className="col animate-pop-right">
            <h4 className="footer__link">Partners</h4>
          </div>
          <div className="col animate-pop-right">
            <h4 className="footer__link">Blog</h4>
          </div>
          <div className="col animate-pop-right">
            <img className="rocky-dashed animate-pop-right" src={rockyDashed} />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
