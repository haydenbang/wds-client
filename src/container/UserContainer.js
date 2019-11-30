import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import User from "../pages/users/User";
import { getUserList } from "../redux/actions";

class UserContainer extends Component {
  componentDidMount() {
    const { getUSerListConnect } = this.props;
    getUSerListConnect();
  }

  render() {
    const { users } = this.props;

    return <User users={users} />;
  }
}

UserContainer.propTypes = {
  users: PropTypes.oneOfType([PropTypes.object]).isRequired,
  getUSerListConnect: PropTypes.oneOfType([PropTypes.func]).isRequired
};

const mapStateToProps = state => state.users;

export default connect(mapStateToProps, { getUSerListConnect: getUserList })(
  UserContainer
);
