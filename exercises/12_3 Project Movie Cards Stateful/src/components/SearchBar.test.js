import React from 'react';
import { mount } from 'enzyme';

import SearchBar from './SearchBar';

let props;
const searchBar = () => (
  mount(
    <SearchBar
      searchText={props.searchText}
      onSearchTextChange={props.onSearchTextChange}
      bookmarkedOnly={props.bookmarkedOnly}
      onBookmarkedChange={props.onBookmarkedChange}
      selectedGenre={props.selectedGenre}
      onSelectedGenreChange={props.onSelectedGenreChange}
    />,
  )
);

const beforeEachUnitTest = () => {
  props = {
    searchText: 'My Text',
    onSearchTextChange: jest.fn(),
    bookmarkedOnly: true,
    onBookmarkedChange: jest.fn(),
    selectedGenre: 'action',
    onSelectedGenreChange: jest.fn(),
  };
};

describe('<SearchBar /> component', () => {
  beforeEach(() => beforeEachUnitTest());

  it('renders without crashing', () => {
    searchBar();
  });
});

describe('<SearchBar /> component Form', () => {
  beforeEach(() => beforeEachUnitTest());

  const searchBar = () => (
    mount(
      <SearchBar
        searchText={props.searchText}
        onSearchTextChange={props.onSearchTextChange}
        bookmarkedOnly={props.bookmarkedOnly}
        onBookmarkedChange={props.onBookmarkedChange}
        selectedGenre={props.selectedGenre}
        onSelectedGenreChange={props.onSelectedGenreChange}
      />,
    )
  );

  it('renders a form', () => {
    expect(searchBar().find('form').length).toEqual(1);
  });
});

describe('<SearchBar /> component Text input', () => {
  beforeEach(() => beforeEachUnitTest());

  const searchBar = () => (
    mount(
      <SearchBar
        searchText={props.searchText}
        onSearchTextChange={props.onSearchTextChange}
        bookmarkedOnly={props.bookmarkedOnly}
        onBookmarkedChange={props.onBookmarkedChange}
        selectedGenre={props.selectedGenre}
        onSelectedGenreChange={props.onSelectedGenreChange}
      />,
    )
  );

  const textInput = () => searchBar().find('form input[type="text"]');

  it('renders a text input inside the form', () => {
    expect(textInput().length).toBe(1);
  });

  it('has a label with the text "Inclui o texto"', () => {
    expect(searchBar().find('label').at(0).text()).toMatch('Inclui o texto');
  });

  it('passes the `searchText` prop as the value of the input', () => {
    expect(textInput().prop('value')).toBe(props.searchText);
  });

  it('passes the `onSearchTextChange` prop to the `onChange` attribute of the input', () => {
    expect(textInput().prop('onChange')).toBe(props.onSearchTextChange);
  });
});

describe('<SearchBar /> component Bookmarked checkbox', () => {
  beforeEach(() => beforeEachUnitTest());

  const searchBar = () => (
    mount(
      <SearchBar
        searchText={props.searchText}
        onSearchTextChange={props.onSearchTextChange}
        bookmarkedOnly={props.bookmarkedOnly}
        onBookmarkedChange={props.onBookmarkedChange}
        selectedGenre={props.selectedGenre}
        onSelectedGenreChange={props.onSelectedGenreChange}
      />,
    )
  );

  it('renders a checkbox input inside the form', () => {
    expect(searchBar().find('form input[type="checkbox"]').length).toBe(1);
  });

  it('has a label with the text "Mostrar somente favoritos"', () => {
    expect(searchBar().find('label').at(1).text())
      .toMatch('Mostrar somente favoritos');
  });

  it('passes the `bookmarkedOnly` prop to the `checked` attribute of the input', () => {
    const input = searchBar().find('form input[type="checkbox"]');

    expect(input.prop('checked')).toBe(props.bookmarkedOnly);
  });

  it('passes the `onBookmarkedChange` to the `onChange` attribute of text input', () => {
    const input = searchBar().find('form input[type="checkbox"]');

    expect(input.prop('onChange')).toEqual(props.onBookmarkedChange);
  });
});

describe('<SearchBar /> component Movie Genre select', () => {
  beforeEach(() => beforeEachUnitTest());

  const searchBar = () => (
    mount(
      <SearchBar
        searchText={props.searchText}
        onSearchTextChange={props.onSearchTextChange}
        bookmarkedOnly={props.bookmarkedOnly}
        onBookmarkedChange={props.onBookmarkedChange}
        selectedGenre={props.selectedGenre}
        onSelectedGenreChange={props.onSelectedGenreChange}
      />,
    )
  );

  it('renders a select inside the form', () => {
    expect(searchBar().find('form select').length).toEqual(1);
  });

  it('has a label with the text "Filtrar por gênero"', () => {
    expect(searchBar().find('label').at(2).text()).toMatch('Filtrar por gênero');
  });

  it('passes the `selectedGenre` prop as the value of the select', () => {
    const select = searchBar().find('form select');

    expect(select.prop('value')).toEqual(props.selectedGenre);
  });

  it('passes the `onSelectedGenreChange` prop to the `onChange` attribute of the select', () => {
    const select = searchBar().find('form select');

    expect(select.prop('onChange')).toEqual(props.onSelectedGenreChange);
  });

  it('renders 4 options inside the select with expected text and values', () => {
    const genreOptions = [
      { text: 'Todos', value: '' },
      { text: 'Ação', value: 'action' },
      { text: 'Comédia', value: 'comedy' },
      { text: 'Suspense', value: 'thriller' },
    ];
    const options = searchBar().find('form select option');

    expect(options.length).toEqual(4);
    options.forEach((option, index) => {
      expect(option.text()).toEqual(genreOptions[index].text);
      expect(option.props().value).toEqual(genreOptions[index].value);
    });
  });
});
