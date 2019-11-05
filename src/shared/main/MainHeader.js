import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './MainHeader.css';

class MainHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Web Development Signature',
    };
  }

  render() {
    const { title } = this.state;

    return (
      <div className="wds-header">
        <div className="wds-header-title">{title}</div>
        <div className="wds-header-container">
          <Link className="wds-header-link-btn" to="/main">
            Main
          </Link>
          <Link className="wds-header-link-btn" to="/home">
            Home
          </Link>
          <Link className="wds-header-link-btn" to="/image">
            Image
          </Link>
          <Link className="wds-header-link-btn" to="/about">
            About
          </Link>
          <Link className="wds-header-link-btn" to="/user">
            User
          </Link>
        </div>
      </div>
    );
  }
}
export default MainHeader;
