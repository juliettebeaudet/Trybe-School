import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';


class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      isLoading: true,
    };
  }

  componentDidMount() {
    // pegar getMovie e colocar id - trabalhar com match
    const id = this.props.match.params.id;
    movieAPI.getMovie(id)
    .then((mov) => this.setState({
      movie: mov,
      isLoading: false,
    }));
  }

  render() {
    // Change the condition to check the state
    const { movie, isLoading } = this.state;
    if (isLoading) return <Loading />;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${this.props.match.params.id}/edit`}>EDITAR</Link><br />
        <Link to="/">VOLTAR</Link><br />
        <Link to="/" onClick={() => movieAPI.deleteMovie(id)}>
          DELETAR
        </Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
