import React from 'react';
import { Link } from 'react-router-dom';

class Register extends React.Component {
  render() {
    return (
      <div>
        <input type="text" value="" placeholder="Nome"/>
        <input type="text" value="" placeholder="Idade"/>
        <input type="text" value="" placeholder="Email"/>
        <button>Se cadastre</button><br />
        <Link to="/client">Veja clientes cadastrados</Link>
      </div>
    )
  }
}

export default Register;