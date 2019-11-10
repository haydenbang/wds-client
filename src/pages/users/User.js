import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './User.css';

class User extends Component {
  render() {
    const { users } = this.props;
    if (users !== undefined) {
      return (
        <div className="wds-user-wrapper">
          <div className="wds-user__title">Users Page</div>
          <div className="wds-user__body">
            <div className="wds-user__body-container">
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
                  </tr>
                </thead>
                <tbody>
                  {users.map((row) => (
                    <tr>
                      <td>{row.idx}</td>
                      <td>{row.id}</td>
                      <td>{row.name}</td>
                      <td>{row.nick_name}</td>
                      <td>{row.address}</td>
                      <td>{row.tel}</td>
                      <td>2019-11-02</td>
                      <td>2019-11-02</td>
                    </tr>
                  ))}
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
