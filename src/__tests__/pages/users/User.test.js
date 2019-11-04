import React from 'react';
import { shallow } from 'enzyme';
import User from 'pages/users/User';

describe('User', () => {
  const wrapper = shallow(<User />).dive();
});
