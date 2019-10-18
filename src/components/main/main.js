import React, { Component } from 'react';

import './main.css';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Web Development Signature Main Page',
    };
  }

  render() {
    const { title } = this.state;

    return (
      <div className="wds-main-wrapper">
        <div className="wds-main__title">{title}</div>
        <div className="wds-main__header">This is head area.</div>
        <div className="wds-main__body">This is body area.</div>
      </div>
    );
  }
}
