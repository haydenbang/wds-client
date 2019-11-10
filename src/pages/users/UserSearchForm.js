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
        <Link to="/users" className="user_search_button"><button>Search</button></Link>
      </form>
    );
  }
}

export default UserSearchForm;
