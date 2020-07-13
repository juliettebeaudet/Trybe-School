import React from 'react';
import logo from './logo.svg';
import './App.css';
import Allpokemons from './data';

// 1. Altere a sua página para que, ao invés de exibir toda a lista de pokémons,
// ela exiba um pokémon por vez.
// Ao apertar um botão de Próximo pokémon, a página passa a exibir o próximo pokémon da lista,
// e depois o próximo, e assim sucessivamente.
// Ao se chegar ao último pokémon da lista, a pokedex deve voltar para o primeiro pokémon
// no apertar do botão.
// baby steps:
// a) criar a situação inicial que é o pokemon, Pikachu, com um botão. 
// b) setState para que sempre que o button for clickado, passar pelo proximo pokemon.
// c) condicionar para caso for o ultimo pokemon do objeto no Allpokemons, volte ao primeiro.

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
// isso deve ficar igual, afinal ainda é essa estrutura que quero ver em cada pokemon

class ButtonNext extends React.Component{
  render() {
    return <button onClick={<nextPokemon />}> Click to see next pokemon</button>
    {/* A cada click, quero que o novo estado seja o próximo pokemon */}
  }
}
// essa class devia estar dentro da Pokedex...?

class Pokedex extends React.Component{
  constructor(props) {
    super(props); {
      this.state = {pokemonIndex: 0};
      // colocar o primeiro pokemon como estado inicial, how?
    }
  }

  nextPokemon = () => {
    // function para ir para próximo pokemon
    this.setState(state => ({
      pokemonIndex: (state.pokemonIndex + 1)
    }));
  }
  //n sei como condicionar para que volte para primeiro pokemon quando objeto pokemons acabar

  render() {
    return Allpokemons.map(pokemon => 
    <Pokemon
      name={pokemon.name}
      type={pokemon.type}
      image={pokemon.image}
      weight={pokemon.averageWeight.value}
      unit={pokemon.averageWeight.measurementUnit}
    />
    );
  }
}
// o que usar no lugar do map para que apareça apenas um e ir avançando com indice ao clicar o button?


// RENDERIZAR TUDO: primeiro pokemon + botao
function App() {
  return (
    <div className="App">
      <Pokedex />
      {/* <ButtonNext /> */}
    </div>
  );
}

export default App;
