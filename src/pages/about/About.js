import React, { Component } from 'react';

import './About.css';

class About extends Component {
  render() {
    return (
      <div className="wds-about-wrapper">
        <div className="wds-about__title">About Page</div>
        <div className="wds-about__header">This is head area.</div>
        <div className="wds-about__body">This is body area.</div>
      </div>
    );
  }
}

export default About;
