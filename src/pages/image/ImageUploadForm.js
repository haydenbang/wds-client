import React, { Component } from 'react';

import './Image.css';
import '../users/User.css';

class ImageUploadForm extends Component {
  constructor(props) {
    super(props);
    this.state = {file: null}  // state 초기화
  }

  onChange(e) {
    this.setState({file: e.target.files[0]})
  }

  onClick() {

  }

  render() {
    return (
        <div>
          <input type="file" id="uploadInput" className="upload_input" name="file" onChange={e => this.onChange(e)} />
          <button type="button" id="uploadButton" className="btn-gradient red" onClick={this.onClick()}>Upload</button>
        </div>
    );
  }
}

export default ImageUploadForm;
