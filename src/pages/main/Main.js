import React, { Component } from 'react';
import UserCardItem from '~shared/UserCardItem';

import './Main.css';

class Main extends Component {


  render() {

    return (
      <div className="wds-main-wrapper">
        <div className="wds-main-head-container">
          <div className="wds-key-visual"></div>
        </div>
        <div className="wds-main-body-container">
          <UserCardItem/>
        </div>
      </div>
    );

  }
}

export default Main;
