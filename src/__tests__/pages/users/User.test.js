import React from 'react';
import { shallow } from 'enzyme';
import User from 'pages/userReducers/User';

describe('User', () => {
  const wrapper = shallow(<User />).dive();
});
