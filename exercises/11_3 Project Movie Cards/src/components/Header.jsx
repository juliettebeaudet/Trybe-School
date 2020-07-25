// implement Header component here

// 1. Crie um componente chamado Header
// Esse componente representará o cabeçalho da página.

// 2. Renderize o texto "Movie Cards Library" dentro de Header
// O texto deverá estar dentro de uma tag h1, que por sua vez deve estar dentro de uma tag header.

import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Movie Cards Library</h1>
      </header>
    );
  }
}

export default Header;
