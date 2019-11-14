import React from 'react';
import { shallow, mount } from 'enzyme';
import Image from '../../../pages/image/Image';
import ImageUploadForm from "../../../pages/image/ImageUploadForm";
import ImageListItem from "../../../pages/image/ImageListItem";

describe('Image', () => {
  const wrapper = shallow(<Image />);

  describe('render', () => {

    it('show wds image upload', () => {
      const wrapperUpload = mount(<ImageUploadForm />);
      wrapperUpload.setProps({ isOpen: true, close: null });
      wrapperUpload.update();
      expect(wrapperUpload.find('#uploadInput').exists()).toBeTruthy();
      expect(wrapperUpload.find('#uploadButton').exists()).toBeTruthy();
      expect(wrapperUpload.find('.no_resize').exists()).toBeTruthy();
      //expect(wrapperUpload.find('#imagePreview').exists()).toBeTruthy();
      wrapperUpload.setProps({ isOpen: false });
      wrapperUpload.update();
      expect(wrapperUpload.find('#uploadInput').exists()).toBe(false);
      expect(wrapperUpload.find('#uploadButton').exists()).toBe(false);
      expect(wrapperUpload.find('.no_resize').exists()).toBe(false);
    });

    it('show wds image card view', () => {
      const wrapperList = mount(<ImageListItem />);
      //expect(wrapperList.find('.image_item').exists()).toBeTruthy();
    });
  });
});
