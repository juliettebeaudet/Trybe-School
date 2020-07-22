// 12. StrictAccess deve receber um objeto user como props.
// Se username e password de user for "joao" e "1234", respectivamente,
// o componente StrictAccess renderiza um parágrafo que diz "Welcome joao!".
// Caso username ou password não sejam os valores esperados,
// o componente precisa gerar um alerta dizendo Access denied e
// redirecionar quem usa sua aplicação para a página principal.

import React from 'react';
import { Redirect, Link } from 'react-router-dom';

function StrictAccess(props) {
  const user = props.match.params.user;
  if (user.username === "joao" && user.password === "1234") return <h2>Welcome {user.username}!</h2>
  
  return alert("Access denied") (
    <Redirect to="/" />
  );
}
  
export default StrictAccess;
