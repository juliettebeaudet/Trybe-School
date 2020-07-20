import React from 'react';
import PropTypes from 'prop-types';

  //sugerido no enunciado
  const contentDropdown = [
    {id: 1, item: 'a'},
    {id: 2, item: 'b'},
    {id: 3, item: 'c'},
    {id: 4, item: 'd'},
  ];

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shownItem: contentDropdown[0].item,
      isOpen: false,
    };
  this.handleOpenOrClose = this.handleOpenOrClose.bind(this);
  this.changeShownItem = this.changeShownItem.bind(this);
  }

  //FUNCTIONS

  // openDropdown() {
  //   this.setState({
  //     isOpen: true,
  //   });
  // }

  //function para abrir dropdown ao clicar no primeiro elemento visivel (estatuto inicial fechado)
  //e para fechar quando clicar de novo nele

  handleOpenOrClose() {
    if (this.state.isOpen === false) {
      this.setState({
        isOpen: true,
      })
    this.setState({
      isOpen: false,
    })
    }
  }

  //function para mudar shownItem quando clicar em algum elemento do dropdown
  changeShownItem(event) {
    this.setState({
      shownItem: event.target.innerHTML,
    })
  }

  render() {
    const { children, content } = this.props;
    return (
      <section>
        <h1 id="titulo">{children}</h1>
        <div id="caixa"
        onClick={this.handleOpenOrClose}>
          {/* {} aqui colocar valor do primeiro item da lista*/}
          {this.state.shownItem}
        </div>
        <div id="dropdownOpen">
          <ul>
        {contentDropdown.map((i) =>
                    <li onClick={this.changeShownItem}>{i.item}</li>
                    )
                  }
          </ul>
        </div>
      </section>
    );
  }
}

// Receber: Um título - o componente deve recebê-lo como children. OK
// Uma caixa, na forma de uma div para ser clicada. OK
// Seu valor deve ser o primeiro item da lista, como no gif a letra a. OK
// Ao clicar na caixa, ela se expande em uma lista de opções. Cada opção deve possuir um valor.
// Esses valores devem estar dentro de um array de objetos,
// e devem ser passados para dentro de uma props list={content}.


// PROPTYPES
Dropdown.propTypes = {
  // shownItem: PropTypes.string.isRequired,
  // isOpen: PropTypes.bool.isRequired, S ESTADOS N PROPS!!
};

export default Dropdown;