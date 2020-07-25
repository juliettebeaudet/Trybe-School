// implement MovieCard component here
import React from 'react';
import Rating from './Rating.jsx';

// 6. MovieCard recebe prop movie, objeto contendo propriedades:
//  title, subtitle, storyline, imagePath e rating.
// 7 - 10 para renderizar todas essas propriedades.

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return (
      <section>
        <img src={imagePath} alt="moviepic" />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <div className="rating">
          <Rating rating={rating} />
        </div>
      </section>
    );
  }
}

export default MovieCard;
