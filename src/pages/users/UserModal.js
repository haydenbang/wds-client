import React, { Component } from "react";
import { FaEdit } from "react-icons/fa";
import { connect } from "react-redux";
import "./UserModal.css";
import PropTypes from "prop-types";
import { createUser } from "../../redux/actions";
import UserImageList from "./UserImageList";

const authorityValue = ["Owner", "Admin", "Normal"];
class UserModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDefaultPreview: true,
      defaultImg: "/images/default_profile.png",
      imagePreviewUrl: "",
      id: this.props.user.id
    };
  }
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   let nextState = {};
  //   console.log("AAAA");
  //   nextState.id = nextProps.user.id;
  //   return nextState;
  // }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shold : " + nextProps.user.id);
    console.log("shoud : " + nextProps.id);
    console.log("this.state.id : " + this.state.id);
    console.log("nextState.id : " + nextState.id);
    nextState.id = nextProps.user.id;
    nextState.address = nextProps.user.address;
    nextState.authority = nextProps.user.authority;
    nextState.name = nextProps.user.name;
    nextState.nick_name = nextProps.user.nick_name;
    nextState.pass = nextProps.user.pass;
    nextState.photo = nextProps.user.photo;
    nextState.tel = nextProps.user.tel;

    if (this.state.id !== nextState.id) {
      console.log("!!!! : " + nextState.id);
    }

    return true;
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   let nextState = {};
  //   let initUser = {
  //     address: "",
  //     authority: "normal",
  //     id: "",
  //     name: "",
  //     nick_name: "",
  //     pass: "",
  //     photo: "",
  //     tel: ""
  //   };
  //   if (nextProps.user === null || nextProps.user === "undefined") {
  //     //nextState.user = initUser;
  //     nextState.id = initUser.id;
  //     nextState.address = initUser.address;
  //     nextState.authority = initUser.authority;
  //     nextState.id = initUser.id;
  //     nextState.name = initUser.name;
  //     nextState.nick_name = initUser.nick_name;
  //     nextState.pass = initUser.pass;
  //     nextState.photo = initUser.photo;
  //     nextState.tel = initUser.tel;
  //   }
  //   nextState.user = nextProps.user;
  //   nextState.address = nextProps.user.address;
  //   nextState.authority = nextProps.user.authority;
  //   nextState.id = nextProps.id;
  //   nextState.name = nextProps.user.name;
  //   nextState.nick_name = nextProps.user.nick_name;
  //   nextState.pass = nextProps.user.pass;
  //   nextState.photo = nextProps.user.photo;
  //   nextState.tel = nextProps.user.tel;
  //   console.log("nextState" + nextProps.id);
  //   return nextState;
  // }

  // handleSubmit = () => {
  //   // handleCloseSignupModal();
  //   const { id, pass, name, nickname, address, tel, imgFile } = this.state;
  //   const user = {
  //     id,
  //     pass,
  //     name,
  //     nickname,
  //     address,
  //     tel,
  //     photo: imgFile,
  //   };
  //   createUser(user);
  // };

  handleClickConfirm = () => {
    const { id, pass, name, nickname, address, tel, imgFile } = this.state;
    const { createUserConnect } = this.props;
    const user = {
      address,
      authority: "normal",
      id,
      name,
      nickname,
      pass,
      photo: "",
      tel
    };

    createUserConnect(user);
  };

  handleClickCancel = () => {
    const { handleCloseSignupModal } = this.props;
    handleCloseSignupModal();
  };

  handleClickEditProfile = () => {
    this.fileElement.click();
  };

  handleImageChange = e => {
    e.preventDefault();

    const reader = new FileReader();
    const imgFile = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        imgFile,
        imagePreviewUrl: reader.result,
        showDefaultPreview: false
      });
    };

    if (imgFile) {
      reader.readAsDataURL(imgFile);
    }
  };

  handleIdChange = ({ target: { value } }) => {
    console.log("event : " + value);
    this.setState({
      id: value
    });
  };

  handlePassChange = ({ target: { value } }) => {
    this.setState({
      pass: value
    });
  };

  handleNameChange = ({ target: { value } }) => {
    this.setState({
      name: value
    });
  };

  handleNicknameChange = ({ target: { value } }) => {
    this.setState({
      nickname: value
    });
  };

  handleAddressChange = ({ target: { value } }) => {
    this.setState({
      address: value
    });
  };

  handlePhoneChange = ({ target: { value } }) => {
    this.setState({
      tel: value
    });
  };

  // handleAuthorityChange = ({ target: { value } }) => {
  //   this.setState({
  //     authority: value
  //   });
  // };

  handleEditImgKeyDown = e => {
    // keycode 69 : e
    if (e.keyCode() === 69) {
      this.handleImageChange(e);
    }
  };

  render() {
    const { defaultImg, showDefaultPreview, imagePreviewUrl } = this.state;
    const { isOpen, isSignUp, user } = this.props;
    const {
      handleClickCancel,
      handleClickEditProfile,
      handleImageChange,
      handleIdChange,
      handlePassChange,
      handleNameChange,
      handleNicknameChange,
      handleAddressChange,
      handlePhoneChange,
      handleEditImgKeyDown,
      handleClickConfirm
      // handleAuthorityChange,
      // handleSubmit,
    } = this;
    const modalTitle = isSignUp ? "Sign Up" : "User Detail";
    console.log("USER : " + this.props.user.id);

    // const showImage = () => {
    //   {showDefaultPreview ? (
    //     <img
    //       src={defaultImg}
    //       className="wds-userModal__profile_img"
    //     />
    //   ) : (
    //     <img
    //       src={imagePreviewUrl}
    //       className="wds-userModal__profile_img"
    //     />
    //   )}
    // }
    return (
      <>
        {isOpen ? (
          <div className="wds-userModal__Modal">
            {/* <form onSubmit={handleSubmit}> */}
            <div className="wds-userModal__title">
              <p className="wds-userModal__title_text">{modalTitle}</p>
            </div>
            <form>
              <div className="wds-userModal__content">
                <div className="wds-userModal__profile">
                  <div className="wds-userModal__picture_area">
                    {showDefaultPreview ? (
                      <img
                        alt="profileImg"
                        src={defaultImg}
                        className="wds-userModal__profile_img"
                      />
                    ) : (
                      <img
                        alt="profileImg"
                        src={imagePreviewUrl}
                        className="wds-userModal__profile_img"
                      />
                    )}
                    <div
                      role="button"
                      tabIndex={0}
                      className="wds-userModal__edit"
                      onClick={handleClickEditProfile}
                      onKeyDown={handleEditImgKeyDown}
                    >
                      <input
                        className="wds-userModal__input_file"
                        type="file"
                        id="file"
                        name="file"
                        ref={input => {
                          this.fileElement = input;
                        }}
                        onChange={handleImageChange}
                      />
                      <FaEdit size={40} />
                    </div>
                  </div>
                </div>
                <div className="wds-userModal__inputs">
                  <label htmlFor="id" className="wds-userModal">
                    아이디 :
                    <input
                      className="wds-userModal"
                      type="text"
                      id="id"
                      name="id"
                      onChange={handleIdChange}
                      value={this.state.id}
                    />
                  </label>

                  <label htmlFor="password" className="wds-userModal">
                    비밀번호 :
                    <input
                      className="wds-userModal"
                      type="text"
                      id="password"
                      name="password"
                      onChange={handlePassChange}
                      value={this.state.pass}
                    />
                  </label>

                  <label htmlFor="name" className="wds-userModal">
                    이름 :
                    <input
                      className="wds-userModal"
                      type="text"
                      id="name"
                      name="user_name"
                      onChange={handleNameChange}
                      value={this.state.name}
                    />
                  </label>

                  <label htmlFor="nickname" className="wds-userModal">
                    닉네임 :
                    <input
                      className="wds-userModal"
                      type="text"
                      id="nickname"
                      name="nickname"
                      onChange={handleNicknameChange}
                      value={this.state.nick_name}
                    />
                  </label>

                  <label htmlFor="address" className="wds-userModal">
                    주소 :
                    <input
                      className="wds-userModal"
                      type="text"
                      id="address"
                      name="address"
                      onChange={handleAddressChange}
                      value={this.state.address}
                    />
                  </label>

                  <label htmlFor="phone" className="wds-userModal">
                    연락처 :
                    <input
                      className="wds-userModal"
                      type="text"
                      id="phone"
                      name="phone"
                      onChange={handlePhoneChange}
                      value={this.state.tel}
                    />
                  </label>

                  <label htmlFor="authority" className="wds-userModal">
                    Authority :
                    {/* <select disabled onChange={handleAuthorityChange}> */}
                    <select disabled={isSignUp} id="authority">
                      {authorityValue.map(data => (
                        <option
                          value={data}
                          selected={data === this.state.authority}
                        >
                          {data}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
              </div>
              {isSignUp ? null : <UserImageList />}
              <div className="wds-userModal__button-wrap">
                <button
                  type="button"
                  onClick={handleClickConfirm}
                  className="wds-userModal__confirm-btn"
                >
                  Confirm
                </button>
                <button
                  type="button"
                  onClick={handleClickCancel}
                  className="wds-userModal__cancel-btn"
                >
                  {" "}
                  Cancel{" "}
                </button>
              </div>
            </form>
          </div>
        ) : null}
      </>
    );
  }
}

UserModal.propTypes = {
  handleCloseSignupModal: PropTypes.oneOfType([PropTypes.func]).isRequired,
  isOpen: PropTypes.oneOfType([PropTypes.bool]).isRequired,
  isSignUp: PropTypes.oneOfType([PropTypes.bool]).isRequired,
  createUserConnect: PropTypes.oneOfType([PropTypes.func]).isRequired,
  getUserConnect: PropTypes.oneOfType([PropTypes.func]).isRequired
};

export default connect(null, {
  createUserConnect: createUser
})(UserModal);
