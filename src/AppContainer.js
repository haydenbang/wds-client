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
import NotFound from 'shared/NotFound';
import UsersContainer from './container/UserContainer';
import ImageContainer from './container/ImageContainer';

class AppContainer extends Component {
  render() {
    return (
      <Router>
        <div className="app-container">
          <MainHeader />
          <Switch>
            <Route path="/main" component={Main} />
            <Route path="/home" component={Home} />
            <Route path="/image" component={ImageContainer} />
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
