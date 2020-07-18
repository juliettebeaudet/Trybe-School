import React from 'react';
// import PropTypes from 'prop-types';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  this.openDropdown = this.openDropdown.bind(this);
  }

  //FUNCTIONS

  //function para abrir dropdown ao clicar no primeiro elemento visivel (estatuto inicial fechado)
  openDropdown() {
    this.setState({});
  }

  render() {
    const { children, content } = this.props;
    return (
      <section>
        <h1 id="titulo">{children}</h1>
        <div id="caixa"
        onClick={this.openDropdown}>
          {/* {} aqui colocar valor do primeiro item da lista*/}
          blabla test
        </div>
      </section>
    );
  }
}

// Receber: Um título - o componente deve recebê-lo como children. OK
// Uma caixa, na forma de uma div para ser clicada. OK
// Seu valor deve ser o primeiro item da lista, como no gif a letra a.
// Ao clicar na caixa, ela se expande em uma lista de opções. Cada opção deve possuir um valor.
// Esses valores devem estar dentro de um array de objetos,
// e devem ser passados para dentro de uma props list={content}.


// PROPTYPES

export default Dropdown;