import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onTabClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    const { 
      onTabClick,
      props: {
        activeTab,
        label,
      },
    } = this;

    let className = 'tab-list-item';

    if (this.props.activeTab === label) {
      className += ' tab-list-active';
    }

    return (
      <li 
        className={className}
        onClick={onTabClick}>
          <a href={`#${activeTab.replace(/ /g, '')}`}>{label}</a>
      </li>
    );
  }
}


export default Tab;