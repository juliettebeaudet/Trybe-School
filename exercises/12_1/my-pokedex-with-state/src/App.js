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

// 2. Sua pokedex deve ter dois botões contendo os tipos Fire e Psychic. A partir dessa seleção, a pokedex deve circular somente pelos pokémons daquele tipo. Quando a página carrega, um desses filtros deve estar selecionado.


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
      this.state = {
        pokemonIndex: 0,
        pokemonType: 'Fire',
      };
      // colocar o primeiro pokemon como estado inicial
    }
  }

  handleClick = (listLength) => {
    this.nextPokemon(this.state, listLength);
  }
  nextPokemon = (state, listLength) => {
    // function para ir para próximo pokemon
    this.setState({
      pokemonIndex: state.pokemonIndex + 1 >= listLength ? 0 : state.pokemonIndex + 1
    }) 
  }
  // pode também fazer usando modulo (ex1)
  // pokemonIndex: (state.pokemonIndex + 1) % allPokemons.length,

  setFilter = (state, filter) => {
    this.setState({
      pokemonIndex: state.pokemonIndex,
      pokemonType: filter,
    })
  }

  render() {
    const filteredPokemons = allPokemons
    .filter(pokemon => this.state.pokemonType === pokemon.type);
    // const { name, type, image, averageWeight } =  allPokemons[this.state.pokemonIndex]; (ex1)
    const { name, type, image, averageWeight } =  filteredPokemons[this.state.pokemonIndex];
 
    return (
      <section>
      <Pokemon
        name={name}
        type={type}
        image={image}
        weight={averageWeight.value}
        unit={averageWeight.measurementUnit}
        />
      <button onClick={() => this.setFilter(this.state, 'Fire')}>Fire</button>
      <button onClick={() => this.setFilter(this.state, 'Psychic')}>Psychic</button>
      <br /><br />
      <button onClick={() => this.handleClick(filteredPokemons.length)}>See next Pokemon</button>
    </section>
    );
  }
}
// em vez do map do ex anterior, usar um pokemon por vez e funcionar com index (ex1)
// integrar filtros jà aqui (ex2)

// RENDERIZAR TUDO
function App() {
  return (
    <div className="App">
      <Pokedex />
    </div>
  );
}

export default App;
