import React from 'react';
import Dropdown from './Dropdown';
import './App.css';

function App() {

  //sugerido no enunciado
  const content = [
    {id: 1, item: 'a'},
    {id: 2, item: 'b'},
    {id: 3, item: 'c'},
    {id: 4, item: 'd'},
  ];

  // aqui apenas renderizar no final
  return (
    <div>
     <Dropdown>
       Here is my dreamy dropdown! (title test)
       </Dropdown> 
    </div>
  );
}

export default App;
