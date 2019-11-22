import React, { Component } from 'react';

import './Image.css';
import '../users/User.css';
import ImageUploadForm from "./ImageUploadForm";
import ImageListItem from "./ImageListItem";

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = { isFormOpen: false };

    // This binding is necessary to make `this` work in the callback
    this.openUploadForm = this.openUploadForm.bind(this);
    this.closeUploadForm = this.closeUploadForm.bind(this);
  }

  openUploadForm() {
    this.setState({ isFormOpen: true });
  }

  closeUploadForm() {
    this.setState({ isFormOpen: false });
  }

  render() {
    const upload = this.state;
    return (
      <div className="wds-image-wrapper">
        <div className="wds-image__title">Image Page</div>
        <div className="wds-image__body">
            <button className="btn-gradient red" onClick={this.openUploadForm}>Upload</button>
            <ImageUploadForm isOpen={this.state.isFormOpen} close={this.closeUploadForm} />
            <ImageListItem />
        </div>
      </div>
    );
  }
}

export default Image;
