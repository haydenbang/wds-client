import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Image from '../pages/image/Image';
import { getImageList } from '../redux/actions';

class ImageContainer extends Component {
  componentDidMount() {
    const { getImageList } = this.props;
    getImageList();
  }

  render() {
    const { images } = this.props;
    return <Image images={images} />;
  }
}

ImageContainer.propTypes = {
  getImageList: PropTypes.oneOfType([PropTypes.func]).isRequired,
  images: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

const mapStateToProps = (state) => state.users;

export default connect(
  mapStateToProps,
  { getImageList },
)(ImageContainer);
