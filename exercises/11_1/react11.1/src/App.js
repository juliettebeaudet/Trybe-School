import React from 'react';
import logo from './logo.svg';
import './App.css';

// 1. insira a função a seguir acima do seu App:
const task = (value) => {
  return (
    <li>{value}</li>
  );
}

// 3.crie uma array de compromissos e use a função map para que cada item do array apareça,
// como um item de lista, no seu componente App.

const tasks = () => {
  const arrayTasks = ['respirar', 'sorrir', 'aprender'];
  // return arrayTasks.map(i => intro + i);
  return arrayTasks.map(i => <li>{i}</li>);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* 2. chame dentro dentro do seu componente App (não se esqueça da sintaxe JSX!) - ou seja {}. */}
        {/* <ul>{task('item 1')}</ul> */}
        <ul>{tasks()}</ul>
        
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
