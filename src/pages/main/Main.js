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
          <img className="wds-main__key-visual" src="/images/main__keyvisual.jpg" alt="main__keyvisual" />
        </div>
        <div className="wds-main__body">
          <div className="wds-main__body-container">
            {
              defaultOwners.map((user, index) => (<UserCardItem key={`${index}_user`} name={user.name} description={user.description} />))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
