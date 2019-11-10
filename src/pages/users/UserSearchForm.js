import React, { Component } from 'react';

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
        <button>검색</button>
      </form>
    );
  }
}

export default UserSearchForm;
