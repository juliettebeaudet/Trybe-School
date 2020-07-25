// implement SearchBar component here
import React, { Component } from 'react';
import InputText from './InputText.jsx';
import InputSelect1 from './InputSelect1.jsx';
import InputCheckbox from './InputCheckbox.jsx';

class SearchBar extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const {
      onSearchTextChange,
      searchText,
      onSelectedGenreChange,
      selectedGenre,
      onBookmarkedChange,
      bookmarkedOnly,
    } = this.props;
    return (
      <form>
        <InputText
          label="" text="Inclui o texto: " value={searchText} change={onSearchTextChange}
        />
        <InputCheckbox
          label="favorites" text="Mostrar somente favoritos"
          checked={bookmarkedOnly} change={onBookmarkedChange}
        />
        <InputSelect1
          label="genre" text="Filtrar por gênero"
          value={selectedGenre} change={onSelectedGenreChange}
        />
      </form>
    );
  }
}

export default SearchBar;
