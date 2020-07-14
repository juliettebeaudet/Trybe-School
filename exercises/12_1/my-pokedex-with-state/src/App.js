import React from 'react';
import logo from './logo.svg';
import './App.css';
import allPokemons from './data';

// 1. Altere a sua página para que, ao invés de exibir toda a lista de pokémons,
// ela exiba um pokémon por vez.
// Ao apertar um botão de Próximo pokémon, a página passa a exibir o próximo pokémon da lista,
// e depois o próximo, e assim sucessivamente.
// Ao se chegar ao último pokémon da lista, a pokedex deve voltar para o primeiro pokémon
// no apertar do botão.


class Pokemon extends React.Component{
  render() {
    return (
      <section className="pokemons">
      <div className="each_pokemon">
      <p>{this.props.name}</p>
      <p>{this.props.type}</p>
      <p>{`${this.props.weight} ${this.props.unit}`}</p>
      <img src={this.props.image} />
      </div>
      </section>
    );   
  }
}
// isso deve ficar igual, afinal ainda é essa estrutura que quero ver em cada pokemon e props é imutavel

class Pokedex extends React.Component{
  constructor(props) {
    super(props); {
      this.state = {pokemonIndex: 0};
      // colocar o primeiro pokemon como estado inicial
    }
  }

  handleClick = () => {
    this.nextPokemon(this.state);
  }

  nextPokemon = (state) => {
    // function para ir para próximo pokemon
    this.setState({
      pokemonIndex: state.pokemonIndex > allPokemons.length ? 0 : state.pokemonIndex + 1,
    }) 
  }
// condicionando para que retorne ao indice 0 quando acabar a lista

  render() {
    const { name, type, image, averageWeight } =  allPokemons[this.state.pokemonIndex];
      
    return (
      <section>
      <Pokemon
        name={name}
        type={type}
        image={image}
        weight={averageWeight.value}
        unit={averageWeight.measurementUnit}
        />
      <button onClick={this.handleClick}>See next Pokemon</button>
    </section>
    );
  }
}
// em vez do map, usar um pokemon por vez e funcionar com index

// RENDERIZAR TUDO
function App() {
  return (
    <div className="App">
      <Pokedex />
    </div>
  );
}

export default App;
