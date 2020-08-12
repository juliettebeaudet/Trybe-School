import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import App from './App';
import renderWithRedux from './helpers/renderWithRedux';
import todo from '../src/store/reducers/todo';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
afterEach(cleanup);

test('renders initial page with an input, 4 buttons and their correct names', () => {
  const { getByTestId, getAllByRole, getByText } = renderWithRedux(<App/>);
  expect(getByTestId('inputUser')).toBeInTheDocument();
  const buttons = getAllByRole('button');
  expect((buttons).length).toBe(4);
  expect((buttons)[0].innerHTML).toBe('Add Todo');
  expect((buttons)[1].innerHTML).toBe('Todos');
  expect((buttons)[2].innerHTML).toBe('Finalizados');
  expect((buttons)[3].innerHTML).toBe('Em andamento');
  expect(getByText(/add todo/i)).toBeInTheDocument();
  expect(getByText(/todos/i)).toBeInTheDocument();
  expect(getByText(/finalizados/i)).toBeInTheDocument();
  expect(getByText(/em andamento/i)).toBeInTheDocument();
}
);

test('adding two items to the list', () => {
  const { queryByText } = renderWithRedux(<App />, { initialState: { todo: { todos: ['bla'] }}});
  expect('bla').toBeInTheDocument();
  // como mudar isso e forçar uma todo no input? pois os estados da reducer n sao visiveis e coisas de funcionamento
  // event para impor algo no input
  // fireEvent.change(text, { target: {value: 'bla'}});
  // expect(text.value).toBe('bla');
  // fireEvent.click(getByText('Add Todo'));
  // expect('bla').toBeInTheDocument();
}
);




