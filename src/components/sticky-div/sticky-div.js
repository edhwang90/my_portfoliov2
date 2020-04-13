import React, { Component } from 'react';

import './sticky-div.scss';

class StickyDiv extends Component {

  state = {
    originalLocation: ''
  }

  componentDidMount = () => {
    const { handleScroll, props: { id } } = this;
    this.setState({ originalLocation: document.getElementById(id).offsetTop})
    window.addEventListener('scroll', handleScroll);
  }

  componentWillUnmount = () => {
    const { handleScroll } = this;
    window.removeEventListener('scroll', handleScroll);
  }

  handleScroll = (e) => {
    const { props: { locationToStop, id }, stickToBottom, stickToTop } = this;

    if (locationToStop !== id) {
      stickToBottom();
    }
    else {
      stickToTop();
    }
  }

  stickToTop = () => {
    const { id, anchor } = this.props;
    const stickyCTA = document.getElementById(id);

    const stopHeight = stickyCTA.offsetHeight;
    const currentScrollPosition = window.pageYOffset;
    const anchorTo = document.getElementById(anchor).offsetHeight;

    if (currentScrollPosition >= this.state.originalLocation - stopHeight) {
      stickyCTA.classList.add('fixed-top');
      stickyCTA.style.top = `${anchorTo}px`;
      document.body.style.paddingTop = `${anchorTo + stickyCTA.offsetHeight}px`;
    }
    else {
      stickyCTA.classList.remove('fixed-top');
      document.body.style.paddingTop = '0px';
    }
  }

  stickToBottom = () => {
    const { locationToStop, id } = this.props;
    const stickyCTA = document.getElementById(id);
 
    if (window.pageYOffset === 0) {
      stickyCTA.style.position = 'fixed';
      return;
    }

    const stopPosition = document.getElementById(locationToStop).offsetTop;
    const stopHeight = document.getElementById(locationToStop).offsetHeight;
    const currentScrollPosition = window.innerHeight + window.pageYOffset;

    if (currentScrollPosition - stopHeight >= stopPosition) {
      stickyCTA.style.position = 'initial';
    }
    else if (currentScrollPosition < stopPosition) {
      stickyCTA.style.position = 'fixed';
    }
  }

  render () {
    const { children, id, locationToStop } = this.props;

    return (
      <div id={id} className={ locationToStop !== id ? 'sticky-button fixed-bottom' : 'sticky-button' }>
        {children}
     </div>
    )
  }
}

export default StickyDiv;