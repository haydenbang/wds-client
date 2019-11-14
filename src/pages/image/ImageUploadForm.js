import React, { Component, Fragment } from 'react';
import axios from 'axios';

import './Image.css';

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
    const url = "";
    formData.append('file', this.state.file);
    formData.append('contents', this.state.contents);
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
      <Fragment>
      {this.props.isOpen ?
        <Fragment>
        <div className="Modal-overlay" onClick={this.props.close} />
        <div className="Modal">
          <p className="title">Image Upload</p>
          <div className="content">
            <p>File Select</p>
            <input type="file" id="uploadInput" className="upload_input" name="file" onChange={e => this.onChangeFile(e)} />
            <p>Contents</p>
            <textarea className="no_resize upload_contents" name="contents" value={this.state.contents} onChange={e => this.onChangeText(e)} />
          </div>
          <div className="button-wrap">
            <button id="uploadButton" onClick={this.onClick}>Upload</button>
          </div>
        </div>
        </Fragment>
      : null}
      </Fragment>
    );
  }
}

export default ImageUploadForm;
