import React, { Component } from "react";
import PropTypes from "prop-types";
import "./UserModal.css";

class UserImageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultThumbnail: "/images/default_thumbnail.png",
      images: [
        {
          id: 1,
          name: "image_1",
          made_date: "2019-11-30",
          update_date: "2019-11-39",
          image: ""
        },
        { id: 2, name: "image_2", made_date: "2019-11-30", image: "" },
        { id: 3, name: "image_3", made_date: "2019-11-30", image: "" }
      ]
    };
  }
  render() {
    const { defaultThumbnail } = this.state;
    const { images } = this.state; //api하면 props
    const ImageListItem = image => {
      return (
        <tr className="wds-userImageList__tr">
          <td>{image.name}</td>
          <td>{image.made_date}</td>
        </tr>
      );
    };
    return (
      <div className="wds-userImageList">
        <div className="wds-userImageList__thumbNail_area">
          <img
            alt="thumbnail"
            src={defaultThumbnail}
            className="wds-userImageLIst__thumbNail_img"
          />
        </div>
        <div className="wds-userImageList__list_area">
          Upload Images
          <div className="wds-userImageList__list">
            <table className="wds-userImageList__image_table">
              <thead>
                <tr align="center">
                  <th scope="cols">사진이름</th>
                  <th scope="cols">만든 날짜</th>
                </tr>
              </thead>
              <tbody>{images.map(image => ImageListItem(image))}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default UserImageList;
