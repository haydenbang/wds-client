import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './User.css';

class UserListItem extends Component {
  render() {
    const { row } = this.props;
    return (
      <tr>
        <td key={row.idx}>{row.idx}</td>
        <td>{row.id}</td>
        <td>{row.name}</td>
        <td>{row.nick_name}</td>
        <td>{row.address}</td>
        <td>{row.tel}</td>
        <td>2019-11-02</td>
        <td>2019-11-02</td>
      </tr>
    );
  }
}

UserListItem.propTypes = {
  row: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default UserListItem;
