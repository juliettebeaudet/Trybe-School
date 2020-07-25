import React from 'react'
import { shallow } from 'enzyme';

import Rating from './Rating';

describe('<Rating /> component', () => {
  it('renders without crashing', () => {
    shallow(<Rating />);
  });

  it('renders the rating inside an element with the class `rating`', () => {
    const wrapper = shallow(<Rating rating={3} />);

    expect(wrapper.find('.rating').text()).toEqual('3');
  });
});
