import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


class MovieCard extends React.Component {
  render() {
    const { imagePath, title, storyline, id } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <img src={imagePath} alt={title} />
        <div>{title}</div>
        <div>{storyline}</div>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
