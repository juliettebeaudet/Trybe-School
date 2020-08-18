// src/components/FilterTodos.js
import React from 'react';
import { connect } from 'react-redux';

import * as TodoActions from '../store/actions/todo';

const FilterTodos = ({ filter }) => (
  <div>
    <button type="button" onClick={() => filter('all')}>Todos</button>
    <button type="button" onClick={() => filter('done')}>Finalizados</button>
    <button type="button" onClick={() => filter('progress')}>Em andamento</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  filter: (filter) => dispatch(TodoActions.filter(filter))});

export default connect(null, mapDispatchToProps)(FilterTodos);
