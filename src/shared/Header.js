import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="wds-header">
        <div className="wds-header-container">
          <Link className="wds-header-link-btn" to="/">
            Home
          </Link>
          <Link className="wds-header-link-btn" to="/image">
            Image
          </Link>
          <Link className="wds-header-link-btn" to="/about">
            About
          </Link>
        </div>
      </div>
    );
  }
}
export default Header;
