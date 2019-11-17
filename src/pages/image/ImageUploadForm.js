import React, { Component, Fragment } from 'react';

import './Image.css';
import '../../shared/css/Modal.css';
import {uploadImage} from "../../api";

class ImageUploadForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        file: null,
        contents: ""
    };  // state 초기화

    // This binding is necessary to make `this` work in the callback
    this.onChangeFile = this.onChangeFile.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChangeFile(e) {
    this.setState({file: e.target.files[0]});
  }

  onChangeText(e) {
    this.setState({contents: e.target.contents});
  }

  onClick() {
    const formData = new FormData();
    formData.append('file', this.state.file);
    formData.append('contents', this.state.contents);
    return uploadImage(formData);
  }

  render() {
    return (
      <Fragment>
      {this.props.isOpen ?
        <Fragment>
        <div className="wds-modal__overlay" onClick={this.props.close} />
        <div className="wds-modal__modal">
          <p className="title">Image Upload</p>
          <div className="content">
            <p>File Select</p>
            <input type="file" className="wds-image__upload_input_file" name="file" onChange={e => this.onChangeFile(e)} />
            <p>Contents</p>
            <textarea className="wds-image__upload_contents" name="contents" value={this.state.contents} onChange={e => this.onChangeText(e)} />
          </div>
          <div className="button-wrap">
            <button className="wds-image__upload_button" onClick={this.onClick}>Upload</button>
          </div>
        </div>
        </Fragment>
      : null}
      </Fragment>
    );
  }
}

export default ImageUploadForm;
