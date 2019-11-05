import React, { Component } from 'react';
import UserCardItem from '../../shared/user/UserCardItem';
import dummyUsers from '../../shared/Contants';

import './Main.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultOwners: dummyUsers.rows,
    };
  }

  render() {
    const { defaultOwners } = this.state;
    return (
      <div className="wds-main-wrapper">
        <div className="wds-main__title">Main Page</div>
        <div className="wds-main__header">
          <div className="wds-main__key-visual" />
        </div>
        <div className="wds-main__body">
          <div className="wds-main__body-container">
            {
              defaultOwners.map((user, index) => (<UserCardItem key={`${index}_user`} name={user.name} desc={user.description} />))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
