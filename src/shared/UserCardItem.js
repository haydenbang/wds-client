import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserCardItem extends Component {
  render() {
    const { name, description } = this.props;
    return (
      <div className="wds-card-item-wrapper">
        <div className="wds-card-item-thumbnail" />
        <div className="wds-card-item-user-info-container">
          <div className="wds-card-item-user-info-name">{name}</div>
          <div className="wds-card-item-user-info-nick-name">{description}</div>
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
