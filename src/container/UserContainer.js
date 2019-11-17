import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import User from '../pages/users/User';
import { getUserList } from '../redux/actions';

class UserContainer extends Component {
  componentDidMount() {
    const { getUserList } = this.props;
    getUserList();
  }

  render() {
    const { users } = this.props;
    return <User users={users} />;
  }
}

UserContainer.propTypes = {
  getUserList: PropTypes.oneOfType([PropTypes.func]).isRequired,
  users: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

const mapStateToProps = (state) => state.users;

export default connect(
  mapStateToProps,
  { getUserList },
)(UserContainer);
