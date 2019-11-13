import React, { Component } from 'react';
import axios from 'axios';

import './Image.css';
import '../users/User.css';

class ImageUploadForm extends Component {
  constructor(props) {
    super(props);
    this.state = {file: null};  // state 초기화

    // This binding is necessary to make `this` work in the callback
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(e) {
    this.setState({file: e.target.files[0]});
  }

  onClick() {
    const formData = new FormData();
    const url = "";
    formData.append('file', this.state.file);
    return axios.post(url, formData)
        .then(res => {
            console.log(res.data);
            alert("이미지 업로드 완료되었습니다.");
        }).catch(err => {
            console.log(err.data);
            alert("이미지 업로드 실패하였습니다.")
        })
  }

  render() {
    return (
        <div>
          <input type="file" id="uploadInput" className="upload_input" name="file" onChange={e => this.onChange(e)} />
          <button type="button" id="uploadButton" className="btn-gradient red" onClick={this.onClick}>Upload</button>
        </div>
    );
  }
}

export default ImageUploadForm;
