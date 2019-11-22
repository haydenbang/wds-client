import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserModal from '../../pages/users/UserModal';

import './MainHeader.css';

class MainHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Web Development Signature',
    };
  }

  handleClickSignUp = () => {
    const { handleOpenSignupModal } = this.props;
    handleOpenSignupModal();
  };

  render() {
    const { title } = this.state;
    const { handleClickSignUp } = this;
    const { signUpModalStatus, handleCloseSignupModal } = this.props;

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
          <Link className="wds-header-link-btn" to="/user">
            User
          </Link>
          <button type="button" onClick={handleClickSignUp}>
            Sign up
          </button>
          <button type="button">Sign in</button>
        </div>
        <UserModal
          isOpen={signUpModalStatus}
          isSignUp
          handleCloseSignupModal={handleCloseSignupModal}
        />
      </div>
    );
  }
}

MainHeader.propTypes = {
  handleOpenSignupModal: PropTypes.oneOfType([PropTypes.func]).isRequired,
  handleCloseSignupModal: PropTypes.oneOfType([PropTypes.func]).isRequired,
  signUpModalStatus: PropTypes.oneOfType([PropTypes.bool]).isRequired,
};
export default MainHeader;
