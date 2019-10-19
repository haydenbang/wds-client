import React from 'react';
import { shallow } from 'enzyme';
import Home from 'pages/home/Home';

describe('Home', () => {
  const wrapper = shallow(<Home />);

  describe('render', () => {
    it('show wds home title', () => {
      expect(wrapper.find('.wds-home__title').text()).toEqual(
        'Web Development Signature Home Page',
      );
    });
    it('show wds header', () => {
      expect(wrapper.find('.wds-home__header').exists()).toBeTruthy();
    });
    it('show wds home body', () => {
      expect(wrapper.find('.wds-home__header').exists()).toBeTruthy();
    });
  });
});
