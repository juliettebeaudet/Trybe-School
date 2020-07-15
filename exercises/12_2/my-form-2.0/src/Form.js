import React from 'react';
import States from './States.js';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value,
      // this.setState({value: event.target.value.toUpperCase()});
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      submit: this.state.input,
    });
  }

  render() {
    return (
      <section>
        <form>
        <fieldset>
          <legend>Dados pessoais</legend>
          <label for='nome'>Nome completo:</label>
          <input
            type='text'
            id='nome'
            name='nome'
            maxlength='40'
            required='required'
            // style="text-transform:uppercase"
          /> <br />
          <label for='email'>Email:</label>
          <input type='text' id='email' name='email' maxlength='50' required='required' /><br />

          <label for='cpf'>CPF:</label>
          <input type='text' id='cpf' name='cpf' maxlength='11' required='required' /><br />

          <label for='endereço'>Endereço:</label>
          <input type='text' id='endereço' name='endereço' maxlength='200' required='required' /><br />

          <label for='cidade'>Cidade:</label>
          <input type='text' id='cidade' name='cidade' maxlength='28' required='required' /><br />

          <label for='estado'>Estado:</label>
          <select type='text' id='estado' name='cidade' required='required' /><br />
        </fieldset>
        </form>
        <button type='submit'>Consolidar form</button>
        <p className='consolidate'>{this.state.submit}</p>
        <button>Limpar form</button>
      </section>
    );
  }
}
// class MyForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       input: '',
//       submit: ''
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleChange(event) {
//     this.setState({
//       input: event.target.value
//     });
//   }
//   handleSubmit(event) {
//     event.preventDefault()
//     this.setState({
//       submit: this.state.input
//     });
//   }
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <input
//             value={this.state.input}
//             onChange={this.handleChange} />
//           <button type='submit'>Submit!</button>
//         </form>
//         <h1>{this.state.submit}</h1>
//       </div>
//     );
//   }
export default MyForm;
