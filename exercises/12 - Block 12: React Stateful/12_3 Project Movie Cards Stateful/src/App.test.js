import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('<App /> component', () => {
  it('renders a `Header` component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('Header').length).toEqual(1);
  });

  it('renders a `MovieLibrary` component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('MovieLibrary').length).toEqual(1);
  });
});
