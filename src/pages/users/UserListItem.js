import React, { Component } from "react";
import PropTypes from "prop-types";

import "./User.css";

class UserListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetailModalStatus: false
    };
  }

  handleOpenUserDetailModal = user => {
    console.log("click");
    const { handleOpenUserDetailModal, getUser } = this.props;
    getUser(user);
    handleOpenUserDetailModal();
  };

  handleCloseUserDetailModal = () => {
    this.setState({ userDetailModalStatus: false });
  };

  render() {
    const { row } = this.props;
    const { handleOpenUserDetailModal, userDetailModalStatus } = this;
    return (
      <tr className="wds-userLIstItem__tr">
        <td key={row.idx}>{row.idx}</td>
        <td onClick={() => handleOpenUserDetailModal(row)}>{row.id}</td>
        <td>{row.name}</td>
        <td>{row.nick_name}</td>
        <td>{row.address}</td>
        <td>{row.tel}</td>
        <td>2019-11-02</td>
        <td>2019-11-02</td>
        <td>User</td>
        <td>
          <button type="button" className="btn-gradient red mini">
            Active
          </button>
        </td>
      </tr>
    );
  }
}

UserListItem.propTypes = {
  row: PropTypes.oneOfType([PropTypes.object]).isRequired
};

export default UserListItem;
