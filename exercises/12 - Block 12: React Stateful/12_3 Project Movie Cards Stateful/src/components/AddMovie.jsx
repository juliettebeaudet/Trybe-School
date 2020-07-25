// implement AddMovie component here
import React, { Component } from 'react';
import InputText from './InputText.jsx';
import InputTextarea from './InputTextarea.jsx';
import InputSelect2 from './InputSelect2.jsx';
import InputNumber from './InputNumber.jsx';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeNumber = this.handleChangeNumber.bind(this);
    this.newAddMovie = this.newAddMovie.bind(this);
  }

  // atribuindo a cada peça do form o valor do input.
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  // para corrigir erro do rating
  handleChangeNumber(event) {
    const { name, value } = event.target;
    this.setState({ [name]: Number(value) });
  }

  // A propriedade onClick do botão invoca uma função definida por você, em AddMovie, que:
  // Executa a callback passada para o componente AddMovie via props, chamada onClick,
  // que recebe como parâmetro o estado atual de AddMovie;
  // Reseta o estado de AddMovie, voltando para o inicial, conforme mencionado anteriormente.
  newAddMovie() {
    const onClick = this.props.onClick;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  renderinputstext() {
    return (
      <div>
        <InputText
          label="title" text="Título" value={this.state.title} change={this.handleChange}
        />
        <InputText
          label="subtitle" text="Subtítulo" value={this.state.subtitle} change={this.handleChange}
        />
        <InputText
          label="image" text="Imagem" value={this.state.imagePath} change={this.handleChange}
        />
      </div>
    );
  }
  render() {
    return (
      <form>
        {this.renderinputstext()}
        <InputTextarea
          label="storyline"
          text="Sinopse"
          value={this.state.storyline}
          change={this.handleChange}
        />
        <InputNumber
          label="rating" text="Avaliação" value={this.state.rating} change={this.handleChangeNumber}
        />
        <InputSelect2
          label="genre" text="Gênero" value={this.state.genre} change={this.handleChange}
        />
        <button type="submit" onClick={this.newAddMovie}>
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
