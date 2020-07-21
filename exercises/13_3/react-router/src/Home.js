// arquivo Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h2> Home </h2>
    <p> My awesome Home component </p>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/users">Users</Link>
    <Link to="/strict-access">Strict Access</Link>
    {/* 14. Adicione no componente App uma rota que mapeie o caminho de URL "/strict-access"
    para o componente StrictAccess. Para poder testar o fluxo de autenticação,
    passe para a prop user de StrictAccess diferentes valores para as propriedades username e password. */}
  </div>
);

export default Home;