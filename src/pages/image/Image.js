import React, { Component } from 'react';

import './Image.css';
import ImageUploadForm from "./ImageUploadForm";
import ImageListItem from "./ImageListItem";

class Image extends Component {
  render() {
    return (
      <div className="wds-image-wrapper">
        <div className="wds-image__title">Image Page</div>
        <div className="wds-image__body">
            <div>
                <ImageUploadForm />
            </div>
            <table>
                <ImageListItem />
            </table>
        </div>
      </div>
    );
  }
}

export default Image;
