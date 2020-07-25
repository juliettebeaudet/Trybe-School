// implement MovieLibrary component here
import React, { Component } from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie.jsx';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onSearchTextChange(event) {
    const { value } = event.target;
    this.setState({ searchText: value });
  }

  onSelectedGenreChange(event) {
    const { value } = event.target;
    this.setState({ selectedGenre: value });
  }

  onBookmarkedChange(event) {
    const { checked } = event.target;
    this.setState({ bookmarkedOnly: checked });
  }

  onClick(newMovie) {
    this.setState({ movies: [...this.props.movies, newMovie] });
  }

  filterMovies() {
    const { selectedGenre, movies, searchText, bookmarkedOnly } = this.state;
    // tem que repetir o destruturing pois n parece pegar de cima
    // Quando estado bookmarkedOnly true, renderizar fav;
    if (bookmarkedOnly === true) {
      const favMovies = movies.filter((mov) => mov.bookmarked);
      return favMovies;
    }
    // Quando estado selectedGenre não vazio, renderizar filmes deste gênero;
    if (selectedGenre.length !== 0) {
      const moviesByGenre = movies.filter((mov) => mov.genre === selectedGenre);
      return moviesByGenre;
    }
    // Quando o estado searchText não vazio, renderizar filmes com texto;
    const movieByText = movies.filter((mov) => (
      (mov.title.includes(searchText))
      || (mov.subtitle.includes(searchText))
      || (mov.storyline.includes(searchText))
    ));
    return movieByText;
    // Caso contrario para todos esses ifs, simplesmente passa todos filmes
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.filterMovies()} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

export default MovieLibrary;
