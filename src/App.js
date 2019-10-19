import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from 'pages/home/Home';
import Header from 'shared/Header';
import About from 'pages/about/About';
import Image from 'pages/image/Image';
import NotFound from 'shared/NotFound';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/image" component={Image} />
            <Redirect exact from="/" to="/home" />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
