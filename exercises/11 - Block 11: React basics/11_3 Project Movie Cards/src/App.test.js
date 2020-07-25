import React from 'react';
import { mount, shallow } from 'enzyme';

import App from './App';
import Header from './components/Header';
import MovieCard from './components/MovieCard';
import MovieList from './components/MovieList';
import Rating from './components/Rating';

let wrapper;

const movies = [
  {
    title: 'Movie Title 1',
    subtitle: 'Movie Subtitle 1',
    storyline: 'Movie Storyline 1',
    rating: 4.5,
    imagePath: 'images/movie_1',
  },
  {
    title: 'Movie Title 2',
    subtitle: 'Movie Subtitle 2',
    storyline: 'Movie Storyline 2',
    rating: 4.5,
    imagePath: 'images/movie_2',
  },
  {
    title: 'Movie Title 3',
    subtitle: 'Movie Subtitle 3',
    storyline: 'Movie Storyline 3',
    rating: 3,
    imagePath: 'images/movie_3',
  },
];

describe('<Header /> component', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });

  it('it includes the text `Movie Cards Library` inside a h1 tag', () => {
    wrapper = shallow(<Header />);

    expect(wrapper.find('header h1').text()).toBe('Movie Cards Library');
  });
});

describe('<MovieList /> component', () => {
  it('renders without crashing', () => {
    shallow(<MovieList movies={movies} />);
  });

  it('renders a `MovieCard` component for each object in the array', () => {
    wrapper = shallow(<MovieList movies={movies} />);

    expect(wrapper.find(MovieCard).length).toEqual(3);
  });

  it('sets the movie title as the key in each rendered `MovieCard`', () => {
    wrapper = mount(<MovieList movies={movies} />);
    const movieCards = wrapper.find(MovieCard);

    movieCards.forEach((movieCard, index) => {
      expect(movieCard.key()).toEqual(movies[index].title);
    });
  });
});

describe('<MovieCard /> component', () => {
  const movie = movies[0];

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
    wrapper = mount(<MovieCard movie={movie} />);
    const starRating = wrapper.find(Rating);

    expect(starRating.props().rating).toEqual(4.5);
  });
});

describe('<Rating /> component', () => {
  it('renders without crashing', () => {
    shallow(<Rating />);
  });

  it('renders the rating inside an element with the class `rating`', () => {
    wrapper = shallow(<Rating rating={3} />);

    expect(wrapper.find('.rating').text()).toEqual('3');
  });
});

describe('<App /> component', () => {
  it('renders a `Header` component', () => {
    wrapper = shallow(<App />);

    expect(wrapper.find('Header').length).toEqual(1);
  });

  it('renders a `MovieList` component', () => {
    expect(wrapper.find('MovieList').length).toEqual(1);
  });
});
