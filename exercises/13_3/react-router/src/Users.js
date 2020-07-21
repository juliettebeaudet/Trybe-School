// arquivo Users.js
import React from 'react';

const Users = ({ greetingMessage = 'Hi There' }) => (
  <div>
    <h2> Users </h2>
    <p> {greetingMessage}, this is my awesome Users component </p>
    {/* <p> {this.props.match.id}, this is my awesome Users component </p>
    algo com const { id } = this.props.match.params ? */}
  </div>
);

// 10. Agora, para fixar uso de URL com parâmetros, altere a rota, definindo o parâmetro chamado id.
// Depois, altere o componente Users, de modo que mostre no parágrafo o valor recebido para o parâmetro id.
// Teste se está funcionando invocando as urls localhost:3000/users/10,
// localhost:3000/users/11 e localhost:3000/users/100, por exemplo.

export default Users;