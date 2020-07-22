// 12. StrictAccess deve receber um objeto user como props.
// Se username e password de user for "joao" e "1234", respectivamente,
// o componente StrictAccess renderiza um parágrafo que diz "Welcome joao!".
// Caso username ou password não sejam os valores esperados,
// o componente precisa gerar um alerta dizendo Access denied e
// redirecionar quem usa sua aplicação para a página principal.

import React from 'react';
import { Redirect } from 'react-router-dom';

class StrictAccess extends React.Component {
  render () {
  // user = this.props.user;
  return (
<div>
  <p>test</p>
  </div>
  )
// escrever uma condicional
}
}
  
export default StrictAccess;

import React from 'react';
import { Link } from 'react-router-dom';
import './Solutions.css';

function Solutions(props) {
  const solutionId = props.match.params.solutionId;

  if (solutionId) return <h2>{solutionId}</h2>

  return (
    <div>
      <h1>Gabaritos</h1>
      {props.avaiableSolutions.map((solution) => (
        <div key={solution}>
          <span>
            <Link className="solution-link" to={`/solutions/${solution}`}>
              {solution}
            </Link>
          </span>
        </div>
      ))}
    </div>
  );
}

export default Solutions;