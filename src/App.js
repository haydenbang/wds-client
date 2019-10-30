import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from 'pages/home/Home';
import Header from 'shared/Header';
import Footer from 'shared/Footer';
import About from 'pages/about/About';
import Image from 'pages/image/Image';
import Search from 'pages/search/Search';
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
            <Route path="/search" component={Search} />
            <Redirect exact from="/" to="/home" />
            <Route component={NotFound} />
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
