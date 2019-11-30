import React, { Component } from "react";
import PropTypes from "prop-types";
import UserSearchForm from "./UserSearchForm";

import "./User.css";
import UserListItem from "./UserListItem";
import UserModal from "./UserModal";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetailModalStatus: false,
      isSignUp: false,
      user: {
        address: "",
        authority: "normal",
        id: "",
        name: "",
        nickname: "",
        pass: "",
        photo: "",
        tel: ""
      }
    };
  }

  handleOpenUserDetailModal = () => {
    this.setState({ userDetailModalStatus: true });
  };

  handleCloseUserDetailModal = () => {
    this.setState({ userDetailModalStatus: false });
  };
  getUser = user => {
    console.log("user : " + user.id);
    this.setState({ user });
  };
  render() {
    const { userDetailModalStatus, isSignUp, user } = this.state;
    const {
      handleOpenUserDetailModal,
      handleCloseUserDetailModal,
      getUser
    } = this;
    const { users } = this.props;
    console.log(users);
    if (users !== undefined) {
      return (
        <div className="wds-user-wrapper">
          <div className="wds-user__title">Manage members</div>
          <div className="wds-user__body">
            <div className="wds-user__body-container">
              <div>
                <UserSearchForm />
              </div>
              <table className="wds_user_table">
                <thead>
                  <tr align="center">
                    <th scope="cols">번호</th>
                    <th scope="cols">아이디</th>
                    <th scope="cols">이름</th>
                    <th scope="cols">닉네임</th>
                    <th scope="cols">주소</th>
                    <th scope="cols">연락처</th>
                    <th scope="cols">가입날짜</th>
                    <th scope="cols">최근접속날짜</th>
                    <th scope="cols">등급</th>
                    <th scope="cols">활성화여부</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(row => (
                    <UserListItem
                      getUser={getUser}
                      key={`${row.idx}`}
                      row={row}
                      handleOpenUserDetailModal={handleOpenUserDetailModal}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <UserModal
            user={user}
            isOpen={userDetailModalStatus}
            isSignUp={isSignUp}
            handleCloseSignupModal={handleCloseUserDetailModal}
          />
        </div>
      );
    }
    return <p>Loading...</p>;
  }
}

User.propTypes = {
  users: PropTypes.oneOfType([PropTypes.object]).isRequired
};

export default User;
