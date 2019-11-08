import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './User.css';

class User extends Component {
  render() {
    const { users } = this.props;
    if (users !== undefined) {
      return (
        <div className="wds-main-wrapper">
          <div className="wds-main__title">Main Page</div>
          <div className="wds-main__body">
            <div className="wds-main__body-container">
              <table border="1">
                <tbody>
                  <tr align="center">
                    <td align="right">아이디</td>
                    <td align="right">이름</td>
                    <td align="right">닉네임</td>
                    <td align="right">주소</td>
                    <td align="right">연락처</td>
                    <td align="right">가입날짜</td>
                    <td align="right">최근접속날짜</td>
                  </tr>
                  {users.map((row) => (
                    <tr>
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
