import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './UserCardItem.css';

class UserCardItem extends Component {
  render() {
    const { name, description } = this.props;
    return (
      <div className="wds-card-item__wrapper">
        <div className="wds-card-item__user-info-thumbnail" />
        <div className="wds-card-item__user-info-container">
          <div className="wds-card-item__user-info-name">{name}</div>
          <div className="wds-card-item__user-info-nick-name">{description}</div>
        </div>
      </div>
    );
  }
}

UserCardItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default UserCardItem;
