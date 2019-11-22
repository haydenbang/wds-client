import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import MainHeader from 'shared/main/MainHeader';
import MainFooter from 'shared/main/MainFooter';
import Main from 'pages/main/Main';
import Home from 'pages/home/Home';
import Image from 'pages/image/Image';
import NotFound from 'shared/NotFound';
import UsersContainer from './container/UserContainer';

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signUpModalStatus: false,
    };
  }

  handleOpenSignupModal = () => {
    this.setState({ signUpModalStatus: true });
  };

  handleCloseSignupModal = () => {
    this.setState({ signUpModalStatus: false });
  };

  render() {
    const { handleOpenSignupModal, handleCloseSignupModal } = this;
    const { signUpModalStatus } = this.state;
    return (
      <Router>
        <div className="app-container">
          <MainHeader
            signUpModalStatus={signUpModalStatus}
            handleOpenSignupModal={handleOpenSignupModal}
            handleCloseSignupModal={handleCloseSignupModal}
          />
          <Switch>
            <Route path="/main" component={Main} />
            <Route path="/home" component={Home} />
            <Route path="/image" component={Image} />
            <Route path="/user" component={UsersContainer} />
            <Redirect exact from="/" to="/main" />
            <Route component={NotFound} />
          </Switch>
          <body className="app-container__body" />
          <MainFooter />
        </div>
      </Router>
    );
  }
}

export default AppContainer;
