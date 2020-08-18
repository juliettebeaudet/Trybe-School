// src/store/actions/todo.js

export const ADD_TODO = 'ADD_TODO';
export const TOOGLE_TODO = 'TOOGLE_TODO';
export const FILTER_TODOS = 'FILTER_TODOS';

export const addTodo = (text) => ({
  type: ADD_TODO,
  text});

export const toogleTodo = (id) => ({
  type: TOOGLE_TODO,
  id});

export const filter = (filter) => ({
  type: FILTER_TODOS,
  filter});
