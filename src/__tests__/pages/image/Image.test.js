import React from 'react';
import { shallow, mount } from 'enzyme';
import Image from '../../../pages/image/Image';
import ImageUploadForm from "../../../pages/image/ImageUploadForm";
import ImageListItem from "../../../pages/image/ImageListItem";

describe('Image', () => {
  const wrapper = shallow(<Image />);

  describe('render', () => {

    it('show wds image page', () => {
      expect(wrapper.find('.wds-image__modal_open').exists()).toBeTruthy();
      expect(wrapper.find('ImageUploadForm').exists()).toBeTruthy();
      expect(wrapper.find('ImageListItem').exists()).toBeTruthy();
    });
  });
});
