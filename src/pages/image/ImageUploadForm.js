import React, { Component } from "react";

import "./Image.css";
import "../../shared/css/Modal.css";
import PropTypes from "prop-types";
import { uploadImage } from "../../redux/api";

class ImageUploadForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      contents: ""
    }; // state 초기화

    // This binding is necessary to make `this` work in the callback
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onChangeFile = this.onChangeFile.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onKeyDown(e) {
    if (e.keyCode() === 27) {
      const modal = this.props;
      modal.close();
    }
  }

  onChangeFile(e) {
    this.setState({ file: e.target.files[0] });
  }

  onChangeText(e) {
    this.setState({ contents: e.target.contents });
  }

  onClick() {
    const upload = this.state;
    const formData = new FormData();
    formData.append("file", upload.file);
    formData.append("contents", upload.contents);
    return uploadImage(formData);
  }

  render() {
    const upload = this.state;
    const modal = this.props;
    return (
      <>
        {modal.isOpen ? (
          <div>
            <div
              role="presentation"
              className="wds-modal__overlay"
              onClick={modal.close}
              onKeyDown={e => this.onKeyDown(e)}
            />
            <div className="wds-modal__modal">
              <p className="title">Image Upload</p>
              <div className="content">
                <p>File Select</p>
                <input
                  type="file"
                  className="wds-image__upload_input_file"
                  name="file"
                  onChange={e => this.onChangeFile(e)}
                />
                <p>Contents</p>
                <textarea
                  className="wds-image__upload_contents"
                  name="contents"
                  value={upload.contents}
                  onChange={e => this.onChangeText(e)}
                />
              </div>
              <div className="button-wrap">
                <button
                  type="button"
                  className="wds-image__upload_button"
                  onClick={this.onClick}
                >
                  Upload
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

ImageUploadForm.propTypes = {
  isOpen: PropTypes.oneOfType([PropTypes.object]).isRequired,
  close: PropTypes.oneOfType([PropTypes.object]).isRequired
};

export default ImageUploadForm;
