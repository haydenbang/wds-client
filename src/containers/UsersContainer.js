import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import User from '../pages/users/User';
import { getUserList } from '../actions';

class UsersContainer extends Component {
  constructor(props) {
    super(props);
    const { getUserList } = this.props;
    getUserList();
  }

  render() {
    const { users } = this.props;
    return <User users={users} />;
  }
}

UsersContainer.propTypes = {
  getUserList: PropTypes.oneOfType([PropTypes.func]).isRequired,
  users: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

const mapStateToProps = (state) => state.users;

export default connect(
  mapStateToProps,
  { getUserList },
)(UsersContainer);
