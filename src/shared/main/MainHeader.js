import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import UserModal from "../../pages/users/UserModal";

import "./MainHeader.css";

class MainHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Web Development Signature",
      initUser: {
        address: "",
        authority: "normal",
        id: "",
        name: "",
        nick_name: "",
        pass: "",
        photo: "",
        tel: ""
      }
    };
  }

  handleClickSignUp = () => {
    const { handleOpenSignupModal } = this.props;
    handleOpenSignupModal();
  };

  render() {
    const { title, initUser } = this.state;
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
          <button
            type="button"
            onClick={handleClickSignUp}
            className="wds-header-signup-btn"
          >
            Sign up
          </button>
          <button type="button" className="wds-header-signin-btn">
            Sign in
          </button>
        </div>
        <UserModal
          user={initUser}
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
  signUpModalStatus: PropTypes.oneOfType([PropTypes.bool]).isRequired
};
export default MainHeader;
