// src/App.js
import React from 'react';
// import { Provider } from 'react-redux';

// import store from './store';

import AddTodo from './components/AddTodo.js';
import FilterTodos from './components/FilterTodos';
import TodoList from './components/TodoList';

const App = () => (
  // <Provider store={store}>
  <div>
    <AddTodo />
    <FilterTodos />
    <TodoList />
  </div>
  // </Provider>
);

export default App;
