import React, { Component } from 'react';
import { FaEdit } from 'react-icons/fa';
import { connect } from 'react-redux';
import './UserModal.css';
import PropTypes from 'prop-types';
import { createUser } from '../../actions';

const authorityValue = ['Owner', 'Admin', 'Normal'];
class UserModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDefaultPreview: true,
      defaultImg: '/images/default_profile.png',
      imagePreviewUrl: '',
    };
  }

  handleSubmit = () => {
    // handleCloseSignupModal();
    const { id, pass, name, nickname, address, tel, imgFile } = this.state;
    const user = {
      id,
      pass,
      name,
      nickname,
      address,
      tel,
      photo: imgFile,
    };
    createUser(user);
  };

  // handleClickConfirm = () => {
  //   // handleCloseSignupModal();
  //   const user = {
  //     id: this.state.id,
  //     pass: this.state.pass,
  //     name: this.state.name,
  //     nickname: this.state.nickname,
  //     address: this.state.address,
  //     tel: this.state.tel,
  //     photo: this.state.imgFile,
  //   };
  //   createUser(user);
  // };

  handleClickCancel = () => {
    const { handleCloseSignupModal } = this.props;
    handleCloseSignupModal();
  };

  handleClickEditProfile = () => {
    this.fileElement.click();
  };

  handleImageChange = (e) => {
    e.preventDefault();

    const reader = new FileReader();
    const imgFile = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        imgFile,
        imagePreviewUrl: reader.result,
        showDefaultPreview: false,
      });
    };

    if (imgFile) {
      reader.readAsDataURL(imgFile);
    }
  };

  handleIdChange = ({ target: { value } }) => {
    this.setState({
      id: value,
    });
  };

  handlePassChange = ({ target: { value } }) => {
    this.setState({
      pass: value,
    });
  };

  handleNameChange = ({ target: { value } }) => {
    this.setState({
      name: value,
    });
  };

  handleNicknameChange = ({ target: { value } }) => {
    this.setState({
      nickname: value,
    });
  };

  handleAddressChange = ({ target: { value } }) => {
    this.setState({
      address: value,
    });
  };

  handlePhoneChange = ({ target: { value } }) => {
    this.setState({
      tel: value,
    });
  };

  // handleAuthorityChange = ({ target: { value } }) => {
  //   this.setState({
  //     authority: value
  //   });
  // };

  handleEditImgKeyDown = (e) => {
    // keycode 69 : e
    if (e.keyCode() === 69) {
      this.handleImageChange(e);
    }
  };

  render() {
    const { defaultImg, showDefaultPreview, imagePreviewUrl } = this.state;
    const { isOpen, isSignUp } = this.props;
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
      // handleAuthorityChange,
      handleSubmit,
    } = this;
    const modalTitle = isSignUp ? 'Sign Up' : 'User Detail';

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
            <form onSubmit={handleSubmit}>
              <div className="wds-userModal__title">
                <p className="wds-userModal__title_text">{modalTitle}</p>
              </div>
              <div className="wds-userModal__content">
                <div className="wds-userModal__profile">
                  <label htmlFor="img" className="wds-userModal">
                    Profile Picture
                  </label>
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
                        ref={(input) => {
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
                  </label>
                  <input
                    className="wds-userModal"
                    type="text"
                    id="id"
                    name="id"
                    onChange={handleIdChange}
                  />

                  <label htmlFor="password" className="wds-userModal">
                    비밀번호 :
                  </label>
                  <input
                    className="wds-userModal"
                    type="text"
                    id="password"
                    name="password"
                    onChange={handlePassChange}
                  />

                  <label htmlFor="name" className="wds-userModal">
                    이름 :
                  </label>
                  <input
                    className="wds-userModal"
                    type="text"
                    id="name"
                    name="user_name"
                    onChange={handleNameChange}
                  />

                  <label htmlFor="nickname" className="wds-userModal">
                    닉네임 :
                  </label>
                  <input
                    className="wds-userModal"
                    type="text"
                    id="nickname"
                    name="nickname"
                    onChange={handleNicknameChange}
                  />

                  <label htmlFor="address" className="wds-userModal">
                    주소 :
                  </label>
                  <input
                    className="wds-userModal"
                    type="text"
                    id="address"
                    name="address"
                    onChange={handleAddressChange}
                  />

                  <label htmlFor="phone" className="wds-userModal">
                    연락처 :
                  </label>
                  <input
                    className="wds-userModal"
                    type="text"
                    id="phone"
                    name="phone"
                    onChange={handlePhoneChange}
                  />

                  <label htmlFor="authority" className="wds-userModal">
                    Authority :
                  </label>
                  {/* <select disabled onChange={handleAuthorityChange}> */}
                  <select disabled id="authority">
                    {authorityValue.map((data) => (
                      <option value={data} selected={data === 'Normal'}>
                        {data}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="wds-userModal__button-wrap">
                <button type="submit"> Confirm </button>
                <button type="button" onClick={handleClickCancel}>
                  {' '}
                  Cancel
                  {' '}
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
};

const mapStateToProps = (state) => state.user;

export default connect(mapStateToProps, { createUser })(UserModal);
