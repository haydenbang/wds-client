import React from 'react';
import { shallow } from 'enzyme';
import Main from './main';

describe('Main', () => {
  const wrapper = shallow(<Main />);

  describe('render', () => {
    it('show wds main title', () => {
      expect(wrapper.find('.wds-main__title').text()).toEqual(
        'Web Development Signature Main Page',
      );
    });
    it('show wds header', () => {
      expect(wrapper.find('.wds-main__header').exists()).toBeTruthy();
    });
    it('show wds main body', () => {
      expect(wrapper.find('.wds-main__header').exists()).toBeTruthy();
    });
  });
});
