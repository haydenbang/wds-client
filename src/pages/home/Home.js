import React, { Component } from 'react';
import './Home.css';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Web Development Signature Home Page',
    };
  }

  render() {
    const { title } = this.state;

    return (
      <div className="wds-home-wrapper">
        <div className="wds-home__title">{title}</div>
        <div className="wds-home__header">This is head area.</div>
        <div className="wds-home__body">This is body area.</div>
      </div>
    );
  }
}
