import React, { Component } from 'react';

import './MainFooter.css';

class MainFooter extends Component {
  render() {
    return (
      <div className="wds-footer">
        Copyright © Web Development Signature
        {' '}
        {new Date().getFullYear()}
        {'.'}
      </div>
    );
  }
}
export default MainFooter;
