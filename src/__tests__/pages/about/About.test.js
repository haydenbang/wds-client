import React from 'react';
import { shallow } from 'enzyme';
import About from 'pages/about/About';

describe('About', () => {
  const wrapper = shallow(<About />);

  describe('render', () => {
    it('show wds home title', () => {
      expect(wrapper.find('.wds-about__title').text()).toEqual(
        'About Page',
      );
    });
    it('show wds header', () => {
      expect(wrapper.find('.wds-about__header').exists()).toBeTruthy();
    });
    it('show wds home body', () => {
      expect(wrapper.find('.wds-about__header').exists()).toBeTruthy();
    });
  });
});
