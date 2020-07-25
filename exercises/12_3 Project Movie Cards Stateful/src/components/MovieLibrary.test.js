import React from 'react';
import { mount, shallow } from 'enzyme';

import MovieLibrary from './MovieLibrary';

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

let movieLibraryWrapper;

const movieLibrary = () => {
  if (!movieLibraryWrapper) {
    movieLibraryWrapper = shallow(<MovieLibrary movies={movies} />);
  }
  return movieLibraryWrapper;
};

const beforeEachUnitTest = () => (movieLibraryWrapper = undefined);

describe('<MovieLibrary /> component', () => {
  it('renders without crashing', () => {
    movieLibrary();
  });
});

describe('<MovieLibrary /> component initial state', () => {
  beforeEach(() => beforeEachUnitTest());

  it('initializes `searchText` in state with an empty string', () => {
    expect(movieLibrary().state().searchText).toBe('');
  });

  it('initializes `bookmarkedOnly` in state with `false`', () => {
    expect(movieLibrary().state().bookmarkedOnly).toBe(false);
  });

  it('initializes `selectedGenre` in state with an empty string', () => {
    expect(movieLibrary().state().selectedGenre).toBe('');
  });

  it('initializes `movies` in state with the prop `movies`', () => {
    expect(movieLibrary().state().movies).toEqual(movies);
  });
});

describe('<MovieLibrary /> should render <SearchBar />', () => {
  beforeEach(() => beforeEachUnitTest());

  it('renders a `SearchBar` component', () => {
    expect(movieLibrary().find('SearchBar').length).toBe(1);
  });

  it('passes `searchText` from state as the prop `searchText` of `SearchBar`', () => {
    // whatever is the value of searchText in state
    movieLibrary().setState({ searchText: 'My Search Text' });

    // is gonna be pased to SearchBar in the prop `searchText`
    const searchBar = movieLibrary().find('SearchBar');
    expect(searchBar.props().searchText).toBe('My Search Text');
  });

  // MovieLibrary must pass to SearchBar a callback in the prop
  // onSearchTextChange. This callback should be called by SearchBar when the
  // user types on the input text field.
  // The callback receives an event containing, among other things, the typed
  // text. The callback should update MovieLibrary's state with the typed text.
  it('passes to `SearchBar` a callback to update `searchText` in state', () => {
    // Initially, searchText in MovieLibrary's state is empty
    expect(movieLibrary().state().searchText).toBe('');

    // then the callback is called with the typed text
    const event = { target: { value: 'new input text' } };
    const searchBar = movieLibrary().find('SearchBar');
    searchBar.props().onSearchTextChange(event);

    // and MovieLibrary's state should change
    expect(movieLibrary().state().searchText).toBe('new input text');
  });

  it('passes `bookmarkedOnly` from state as the prop `bookmarkedOnly` of `SearchBar`', () => {
    // whatever is the value of bookmarkedOnly in state
    movieLibrary().setState({ bookmarkedOnly: true });
    const searchBar = movieLibrary().find('SearchBar');

    // is gonna be pased to SearchBar in the prop `bookmarkedOnly`
    expect(searchBar.props().bookmarkedOnly).toBe(true);
  });

  // MovieLibrary must pass to SearchBar a callback in the prop
  // onBookmarkedChange. This callback should be called by SearchBar when the
  // user toggles the checkbox field to show only bookmarked fields.
  // The callback receives an event containing, among other things, the value
  // of the checkbox.The callback should update MoiveLibrary's state with the
  // value of the checkbox.
  it('passes to `SearchBar` a callback to update `bookmarkedOnly` in state', () => {
    // Initially, MovieLibrary's state field bookmarkedOnly is false
    expect(movieLibrary().state().bookmarkedOnly).toBe(false);

    // then the callback is called with the new checkbox value
    const event = { target: { checked: true } };
    const searchBar = movieLibrary().find('SearchBar');
    searchBar.props().onBookmarkedChange(event);

    // and MovieLibrary's state should change
    expect(movieLibrary().state().bookmarkedOnly).toBe(true);
  });

  it('passes `selectedGenre` from state as the prop `selectedGenre` of `SearchBar`', () => {
    // whatever is the value of selectedGenre in state
    movieLibrary().setState({ selectedGenre: 'fantasy' });
    const searchBar = movieLibrary().find('SearchBar');

    // is gonna be pased to SearchBar in the prop `selectedGenre`
    expect(searchBar.props().selectedGenre).toBe('fantasy');
  });

  // MovieLibrary must pass to SearchBar a callback in the prop
  // onSelectedGenreChange. This callback should be called by SearchBar when the
  // user changes the select with genre options.
  // The callback receives an event containing, among other things, the value
  // of the selected option. The callback should update MoiveLibrary's state
  // with the selected option.
  it('passes to `SearchBar` a callback that updates `MovieLibrary`s state', () => {
    // Initially, MovieLibrary's state field selectedGenere is empty
    expect(movieLibrary().state().selectedGenre).toBe('');

    // then the callback is called with the
    const event = { target: { value: 'thriller' } };
    const searchBar = movieLibrary().find('SearchBar');
    searchBar.props().onSelectedGenreChange(event);

    // and MovieLibrary's state should change
    expect(movieLibrary().state().selectedGenre).toBe('thriller');
  });
});

describe('<MovieLibrary /> should render <MovieList />', () => {
  beforeEach(() => beforeEachUnitTest());

  it('renders a `MovieList` component', () => {
    expect(movieLibrary().find('MovieList').length).toBe(1);
  });

  it('passes to MovieList movies with titles matching the text', () => {
    movieLibrary().setState({ searchText: 'awesome' });
    const passedMovies = movieLibrary().find('MovieList').props().movies;

    expect(passedMovies.length).toBe(1);
    expect(passedMovies[0]).toEqual(movies[0]);
  });

  it('passes to MovieList movies with subtitles matching the text', () => {
    movieLibrary().setState({ searchText: 'incredible' });
    const passedMovies = movieLibrary().find('MovieList').props().movies;

    expect(passedMovies.length).toBe(1);
    expect(passedMovies[0]).toEqual(movies[1]);
  });

  it('passes to MovieList movies with storyline matching the text', () => {
    movieLibrary().setState({ searchText: 'great' });
    const passedMovies = movieLibrary().find('MovieList').props().movies;

    expect(passedMovies.length).toBe(1);
    expect(passedMovies[0]).toEqual(movies[2]);
  });

  it('does not filter the movies passed to MovieList', () => {
    movieLibrary().setState({ searchText: '' });
    const passedMovies = movieLibrary().find('MovieList').props().movies;

    expect(passedMovies.length).toBe(3);
    expect(passedMovies).toEqual(movies);
  });

  it('does not filter the movies passed to MovieList', () => {
    movieLibrary().setState({ searchText: '' });
    const passedMovies = movieLibrary().find('MovieList').props().movies;

    expect(passedMovies.length).toBe(3);
    expect(passedMovies).toEqual(movies);
  });

  it('it only passes to MovieList bookmarked movies', () => {
    movieLibrary().setState({ bookmarkedOnly: true });
    const passedMovies = movieLibrary().find('MovieList').props().movies;

    expect(passedMovies.length).toBe(1);
    expect(passedMovies[0]).toEqual(movies[0]);
  });

  it('it does not filter the movies passed to MovieList', () => {
    movieLibrary().setState({ selectedGenre: '' });
    const passedMovies = movieLibrary().find('MovieList').props().movies;

    expect(passedMovies.length).toBe(3);
    expect(passedMovies).toEqual(movies);
  });

  it('passes to MovieList only movies matching the genre', () => {
    movieLibrary().setState({ selectedGenre: 'comedy' });
    const passedMovies = movieLibrary().find('MovieList').props().movies;

    expect(passedMovies.length).toBe(1);
    expect(passedMovies[0]).toEqual(movies[1]);
  });
});

describe('<MovieLibrary /> should render <AddMovie />', () => {
  beforeEach(() => beforeEachUnitTest());

  it('renders a `AddMovie` component', () => {
    expect(movieLibrary().find('AddMovie').length).toBe(1);
  });

  // MovieLibrary must pass to AddMovie a callback in the prop
  // onClick. This callback should be called by AddMovie when the
  // user clicks on the "Adicionar Filme" to create the new movie.
  // The callback receives the movie to be inserted.
  // The callback should update MovieLibrary's state,
  // by adding the new movie at the end of the `movies`.
  it('passes to `AddMovie` a callback to enable adding the new movie at the end of the movies list', () => {
    // Initially, MovieLibrary's state field selectedGenere is empty
    const wrapper = mount(<MovieLibrary movies={movies} />);
    const addMovie = wrapper.find('AddMovie');
    const addMovieButton = addMovie.find('form button');
    const newMovie = {
      subtitle: 'Harry Potter magical subtitle',
      title: 'Harry Potter VII',
      imagePath: 'http://localhost:3000/images/Harry_Potter.jpg',
      storyline: 'Harry dies',
      rating: 4.9,
      genre: 'action',
    };
    const moviesList = () => wrapper.state('movies');

    addMovie.setState(newMovie);

    expect(moviesList().length).toEqual(movies.length);

    addMovieButton.simulate('click');

    const newMovies = moviesList();

    expect(newMovies.length).toEqual(movies.length + 1);
    expect(newMovies[newMovies.length - 1]).toEqual(newMovie);
  });
});
