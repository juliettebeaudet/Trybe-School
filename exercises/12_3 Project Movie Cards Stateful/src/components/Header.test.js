import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

describe('<Header /> component', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });

  it('it includes the text `Movie Cards Library` inside a h1 tag', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.find('header h1').text()).toBe('Movie Cards Library');
  });
});
