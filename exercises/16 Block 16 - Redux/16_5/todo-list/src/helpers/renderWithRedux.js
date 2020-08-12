import React from 'react'
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { render, cleanup, fireEvent } from '@testing-library/react';
import App from '../App';
import reducer from '../store/reducers/todo';

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({reducer}), initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

export default renderWithRedux;
