import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './User.css';

class UserSearchForm extends Component {
  render() {
    return (
      <form>
        <input
          className="user_input"
          placeholder="검색어를 입력하세요."
          name="userSearch"
        />
        <Link to="/users">
          <button type="button" className="btn-gradient red">
               Search
          </button>
        </Link>
      </form>
    );
  }
}

export default UserSearchForm;
