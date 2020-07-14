import React from 'react';
import logo from './logo.svg';
import './App.css';
import Allpokemons from './data';

// 1. Pokemon: esse componente recebe como entrada um objeto que contém informações referentes
// a um pokemon específico. Esse componente precisa retornar as seguintes informações
// para serem mostradas para quem usar a aplicação: nome, tipo, peso médio (com unidade), imagem.

class Pokemon extends React.Component{
  render() {
    return (
      <div>
      <p>{this.props.name}</p>
      <p>{this.props.type}</p>
      <p>{`${this.props.weight} ${this.props.unit}`}</p>
      <img src={this.props.image} />
      </div>
    );   
  }
}

// 2. Pokedex: esse componente representa a enciclopédia de pokemons.
// Esse componente recebe como entrada uma lista de pokemons para serem mostrados na tela.
// Para cada um desses pokemons recebidos, Pokedex chama o componente Pokemon.

class Pokedex extends React.Component{
  render() {
    return Allpokemons.map(pokemon => (
    <Pokemon
      name={pokemon.name}
      type={pokemon.type}
      image={pokemon.image}
      weight={pokemon.averageWeight.value}
      unit={pokemon.averageWeight.measurementUnit}
    />
    ));
  }
}
  
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Pokedex />
    </div>
  );
}

export default App;
