import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import MainHeader from 'shared/main/MainHeader';
import MainFooter from 'shared/main/MainFooter';
import Main from 'pages/main/Main';
import Home from 'pages/home/Home';
import About from 'pages/about/About';
import Image from 'pages/image/Image';
import NotFound from 'shared/NotFound';
import User from 'pages/users/User';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-container">
          <MainHeader />
          <Switch>
            <Route path="/main" component={Main} />
            <Route path="/home" component={Home} />
            <Route path="/image" component={Image} />
            <Route path="/about" component={About} />
            <Route path="/user" component={User} />
            <Redirect exact from="/" to="/main" />
            <Route component={NotFound} />
          </Switch>
          <MainFooter />
        </div>
      </Router>
    );
  }
}

export default App;
