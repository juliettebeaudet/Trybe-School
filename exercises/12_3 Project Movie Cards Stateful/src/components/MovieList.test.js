import React from 'react';
import { mount, shallow } from 'enzyme';

import MovieList from './MovieList';

describe('<MovieList /> component', () => {
  const movies = [
    {
      title: 'An awesome title',
      subtitle: 'Movie Subtitle 1',
      storyline: 'Movie Storyline 1',
      rating: 4.5,
      imagePath: 'images/movie_1',
      bookmarked: true,
      genre: 'action',
    },
    {
      title: 'Movie Title 2',
      subtitle: 'An incredible subtitle',
      storyline: 'Movie Storyline 2',
      rating: 4.5,
      imagePath: 'images/movie_2',
      bookmarked: false,
      genre: 'comedy',
    },
    {
      title: 'Movie Title 3',
      subtitle: 'Movie Subtitle 3',
      storyline: 'An great storyline',
      rating: 3,
      imagePath: 'images/movie_3',
      bookmarked: false,
      genre: 'thriller',
    },
  ];

  it('renders without crashing', () => {
    shallow(<MovieList movies={movies} />);
  });

  it('renders a `MovieCard` component for each object in the array', () => {
    const wrapper = shallow(<MovieList movies={movies} />);

    expect(wrapper.find('MovieCard').length).toEqual(3);
  });

  it('sets the movie title as the key in each rendered `MovieCard`', () => {
    const wrapper = mount(<MovieList movies={movies} />);
    const movieCards = wrapper.find('MovieCard');

    movieCards.forEach((movieCard, index) => {
      expect(movieCard.key()).toEqual(movies[index].title);
    });
  });
});
