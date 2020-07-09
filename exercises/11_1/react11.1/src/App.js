import React from 'react';
import logo from './logo.svg';
import './App.css';

// insira a função a seguir acima do seu App:
const task = (value) => {
  return (
    <li>{value}</li>
  );
}

// agora, chame a função dentro do seu componente App (não se esqueça da sintaxe JSX!) - ou seja {}.


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>{task('item 1')}</ul>
        const arrayTasks = ['item 1', 'item 2', 'item 2'];
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
