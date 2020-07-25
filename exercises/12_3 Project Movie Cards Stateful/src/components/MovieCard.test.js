import React from 'react';
import { shallow } from 'enzyme';

import MovieCard from './MovieCard';

describe('<MovieCard /> component', () => {
  const movie = {
    title: 'Movie Title 1',
    subtitle: 'Movie Subtitle 1',
    storyline: 'Movie Storyline 1',
    rating: 4.5,
    imagePath: 'images/movie_1',
  };

  let wrapper;

  it('renders without crashing', () => {
    shallow(<MovieCard movie={movie} />);
  });

  it('renders the movie image inside an `image` tag', () => {
    wrapper = shallow(<MovieCard movie={movie} />);

    expect(wrapper.find('img').prop('src')).toEqual('images/movie_1');
  });

  it('renders the movie title inside an `h4` tag', () => {
    wrapper = shallow(<MovieCard movie={movie} />);

    expect(wrapper.find('h4').text()).toBe('Movie Title 1');
  });

  it('renders the movie subtitle inside an `h5` tag', () => {
    wrapper = shallow(<MovieCard movie={movie} />);

    expect(wrapper.find('h5').text()).toBe('Movie Subtitle 1');
  });


  it('renders the movie storyline inside a `p` tag', () => {
    wrapper = shallow(<MovieCard movie={movie} />);

    expect(wrapper.find('p').text()).toBe('Movie Storyline 1');
  });

  it('renders a `Rating` component', () => {
    wrapper = shallow(<MovieCard movie={movie} />);

    expect(wrapper.find('Rating').length).toEqual(1);
  });

  it('passes the rating attribute to the `Rating` component', () => {
    wrapper = shallow(<MovieCard movie={movie} />);
    const starRating = wrapper.find('Rating');

    expect(starRating.props().rating).toEqual(4.5);
  });
});
