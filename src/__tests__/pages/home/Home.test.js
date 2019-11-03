import React from 'react';
import { shallow } from 'enzyme';
import Home from 'pages/home/Home';

describe('Home', () => {
  const wrapper = shallow(<Home />).dive();

  describe('render', () => {
    it('show wds main title', () => {
      expect(wrapper.find('.main_title').text()).toEqual(
        '이미지 기반 관리 / 검색 서비스',
      );
    });
    it('show wds main area', () => {
      expect(wrapper.find('.main_area').exists()).toBeTruthy();
    });
    it('show wds user area', () => {
      expect(wrapper.find('.user_area').exists()).toBeTruthy();
    });
  });
});
