import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Image from '../pages/image/Image';
import { getImageList } from '../redux/actions';

class ImageContainer extends Component {
  componentDidMount() {
    getImageList();
  }

  render() {
    const { images } = this.props;
    return <Image images={images} />;
  }
}

ImageContainer.propTypes = {
  images: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

const mapStateToProps = (state) => state.users;

export default connect(
  mapStateToProps,
  { getImageList },
)(ImageContainer);
