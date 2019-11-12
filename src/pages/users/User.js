import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserSearchForm from './UserSearchForm';

import './User.css';
import UserListItem from './UserListItem';

class User extends Component {
  render() {
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
                  {
                    users.map((row) => (<UserListItem key={`${row.idx}`} row={row} />))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }
    return <p>Loading...</p>;
  }
}

User.propTypes = {
  users: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default User;
