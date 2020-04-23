import React from 'react';
import { Link } from "gatsby";

import './header.scss';

class Header extends React.Component {
  state = {
    menuOpen: false
  };

  toggleMenu = (e) => {
    e.preventDefault();
    const { menuOpen } = this.state;
    this.setState({ 'menuOpen': !menuOpen });
  }

  render() {
    const { menuOpen } = this.state;

    return (
      <React.Fragment>
        <header id="Header" className="header-container">
          <ul className="navigation">
            <li> 
              <button className={menuOpen ? 'menuBtn menu-slide-open' : 'menuBtn'} onClick={this.toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </li>
          </ul>
          <a
            className="link rounded inverted"
            title="Email"
            href="mailto:eddhwang0117@gmail.com?subject=Work Opportunity">
            Let's Talk!
          </a>
        </header>
        
        <div className={ menuOpen ? 'menu slide-open' : 'menu' }>
          <ul>
            <li>
              <Link className="link" to="/" title="Home">Home</Link>
            </li>
            <li>
              <a
                className="link"
                title="Resume"
                href="/edh_resume.pdf"
                rel="noopener noreferrer"
                target="_blank">
                Resume
              </a>
            </li>
            <li>
              <a
                className="link"
                title="GitHub"
                href="https://github.com/edhwang90"
                rel="noopener noreferrer"
                target="_blank">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </React.Fragment>
    )
  }
} 

export default Header;
