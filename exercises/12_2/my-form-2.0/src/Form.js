import React from 'react';
import States from './States.js';

const allStates = [
  ['Acre', 'AC'],
  ['Alagoas', 'AL'],
  ['Amapá', 'AP'],
  ['Amazonas', 'AM'],
  ['Bahia', 'BA'],
  ['Ceará', 'CE'],
  ['Distrito Federal', 'DF'],
  ['Espírito Santo', 'ES'],
  ['Goiás', 'GO'],
  ['Maranhão', 'MA'],
  ['Mato Grosso', 'MT'],
  ['Mato Grosso do Sul', 'MS'],
  ['Minas Gerais', 'MG'],
  ['Pará', 'PA'],
  ['Paraíba', 'PB'],
  ['Paraná', 'PR'],
  ['Pernambuco', 'PE'],
  ['Piauí', 'PI'],
  ['Rio de Janeiro', 'RJ'],
  ['Rio Grande do Norte', 'RN'],
  ['Rio Grande do Sul', 'RS'],
  ['Rondônia', 'RO'],
  ['Roraima', 'RR'],
  ['Santa Catarina', 'SC'],
  ['São Paulo', 'SP'],
  ['Sergipe', 'SE'],
  ['Tocantins', 'TO'],
];

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      brazilState: '',
      addressCheck: '',
      submit: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.cleanForm = this.cleanForm.bind(this);
    // this.showInputs = this.showInputs.bind(this);
  }

  handleChange (event) {
    let { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  cleanForm() {
    this.setState({
      nome: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      brazilState: '',
      });
    document.getElementById('consolidate').innerHTML = '';
  }

  // showInputs() {
  //   this.setState({
  //     submit: 
  //   })
  // }

  renderConsolidate() {
    return (
      <div>
      {this.state.nome} <br/>
      {this.state.email}<br/>
      {this.state.cpf}<br/>
      {this.state.address}<br/>
      {this.state.city}<br/>
      {this.state.brazilState}<br/>
      </div>
    )
  }

  render() {
    return (
      <section>
        <form>
          <fieldset>
            <legend>Dados pessoais</legend>
            <label for="nome">Nome completo:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              maxlength="40"
              required="required"
              value={this.state.name}
              style={{ textTransform: 'uppercase'}}
              onChange={this.handleChange}
            />{' '}
            <br />
            <label for="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              maxlength="50"
              required="required"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <br />
            <label for="cpf">CPF:</label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              maxlength="11"
              required="required"
              value={this.state.cpf}
              onChange={this.handleChange}
            />
            <br />
            <label for="endereço">Endereço:</label>
            <input
              type="text"
              id="endereço"
              name="endereço"
              maxlength="200"
              required="required"
              value={this.state.address}
              onChange={this.handleChange}
            />
            <br />
            <label for="cidade">Cidade:</label>
            <input
              type="text"
              id="cidade"
              name="cidade"
              maxlength="28"
              required="required"
              value={this.state.city}
              onChange={this.handleChange}
            />
            <br />
            <label for="estado">Estado:</label>
            <select
              type="text"
              id="estado"
              name="cidade"
              required="required"
              value={this.state.brazilState}
              onChange={this.handleChange}
            >
                {allStates.map((estado) =>
                    <option>{estado}</option>
                    )
                  }
            </select>
            <br />
          </fieldset>
        </form>

        {/* <button type="submit" onClick={this.showInputs}>
          Consolidar form
        </button> */}

        <p id="consolidate">
        {this.renderConsolidate()}
        </p>

        <button className="clean" onClick={this.cleanForm}>
        Limpar form
        </button>
      </section>
    );
  }
}

export default MyForm;
