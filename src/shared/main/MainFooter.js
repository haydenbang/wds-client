import React, { Component } from 'react';

import './MainFooter.css';

class MainFooter extends Component {
  render() {
    return (
      <div className="wds-footer">
        <div className="wds-footer-container">
          <div className="wds-footer-contents">
            Copyright © Web Development Sigature
            {' '}
            {new Date().getFullYear()}
            {'.'}
          </div>
        </div>
      </div>
    );
  }
}
export default MainFooter;
