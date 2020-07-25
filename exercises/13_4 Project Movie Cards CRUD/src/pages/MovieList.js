import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: '',
      isLoading: true,
    };
  }

  // utilizar a função getMovies importada do módulo movieAPI em MovieList. Retorna uma promise.
  componentDidMount() {
    movieAPI.getMovies()
    .then((data) => this.setState({
      movies: data,
      isLoading: false,
    }));
  }

  render() {
    const { movies, isLoading } = this.state;
    // Render Loading here if the request is still happening
    if (isLoading) return (<Loading />);
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
