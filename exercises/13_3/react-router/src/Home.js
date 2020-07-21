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
  </div>
);

export default Home;