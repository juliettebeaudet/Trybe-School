// implement MovieList component here

// 3. Crie um componente chamado MovieList
// Este componente representará toda a área com os cartões de filmes.
// MovieList deve receber uma prop movies, que é um array de objetos com informações de um filme.

// 4. Renderize componentes MovieCard dentro de MovieList
// MovieList deve renderizar um componente MovieCard para cada objeto contido
// no array recebido na prop movies.

import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const allMovies = this.props.movies;
    return (
      <div>
        {(allMovies.map((movie) =>
          <MovieCard movie={movie} key={movie.title} />))
    }
      </div>
    );
  }
}

// 5. Passe uma key para cada MovieCard renderizado
// MovieList deve renderizar MovieCards de forma dinâmica.
// Ou seja, deve utilizar a função map para renderizar uma lista.
// Cada componente MovieCard deve receber uma prop key com o nome do filme.

export default MovieList;
