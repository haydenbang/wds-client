import React, { Component } from 'react';

import { Provider } from 'react-redux';
import configureStore from './store';
import AppContainer from './containers/AppContainer';

import './App.css';

class App extends Component {
  render() {
    const store = configureStore();
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;
