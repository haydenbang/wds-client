import React, { Component } from 'react';

import './Image.css';

class Image extends Component {
  render() {
    return (
      <div className="wds-image-wrapper">
        <div className="wds-image__title">Image Page</div>
        <div className="wds-image__header">This is head area.</div>
        <div className="wds-image__body">This is body area.</div>
      </div>
    );
  }
}

export default Image;
