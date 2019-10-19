import React from 'react';
import { shallow } from 'enzyme';
import Image from 'pages/image/Image';

describe('Image', () => {
  const wrapper = shallow(<Image />);

  describe('render', () => {
    it('show wds home title', () => {
      expect(wrapper.find('.wds-image__title').text()).toEqual(
        'Image Page',
      );
    });
    it('show wds header', () => {
      expect(wrapper.find('.wds-image__header').exists()).toBeTruthy();
    });
    it('show wds home body', () => {
      expect(wrapper.find('.wds-image__header').exists()).toBeTruthy();
    });
  });
});
