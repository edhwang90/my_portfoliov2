import React, { Component } from 'react';

class StickyButton extends Component {

  componentDidMount = () => {
    const { handleScroll } = this;
    window.addEventListener('scroll', handleScroll);
  }

  componentWillUnmount = () => {
    const { handleScroll } = this;
    window.removeEventListener('scroll', handleScroll);
  }

  handleScroll = (e) => {
    const stickyCTA = document.getElementById('StickyButton');
    
    if (window.pageYOffset === 0) {
      stickyCTA.style.position = 'fixed';
      return;
    }

    const { locationToStop } = this.props;
    const footerPosition = document.getElementById(locationToStop).offsetTop;
    const footerHeight = document.getElementById(locationToStop).offsetHeight;
    const currentScrollPosition = window.innerHeight + window.pageYOffset;

    if (currentScrollPosition - footerHeight >= footerPosition) {
      stickyCTA.style.position = 'initial';
    }
    else if (currentScrollPosition < footerPosition) {
      stickyCTA.style.position = 'fixed';
    }
  }

  render () {
    const { children } = this.props;

    return (
      <div id="StickyButton" className="sticky-button">
        {children}
     </div>
    )
  }
}

export default StickyButton;