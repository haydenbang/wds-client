import React from 'react';
import { shallow, mount } from 'enzyme';
import ImageUploadForm from "../../../pages/image/ImageUploadForm";

describe('Image', () => {
  const wrapper = shallow(<ImageUploadForm />);

  describe('render', () => {

    it('show wds image upload', () => {
      wrapper.setProps({ isOpen: true });
      wrapper.update();
      expect(wrapper.find('.wds-image__upload_input_file').exists()).toBeTruthy();
      expect(wrapper.find('.wds-image__upload_contents').exists()).toBeTruthy();
      expect(wrapper.find('.wds-image__upload_button').exists()).toBeTruthy();
    });

    it('close wds image upload', () => {
      wrapper.setProps({ isOpen: false });
      wrapper.update();
      expect(wrapper.find('.wds-image__upload_input_file').exists()).toBeFalsy();
      expect(wrapper.find('.wds-image__upload_contents').exists()).toBeFalsy();
      expect(wrapper.find('.wds-image__upload_button').exists()).toBeFalsy();
    })
  });
});
