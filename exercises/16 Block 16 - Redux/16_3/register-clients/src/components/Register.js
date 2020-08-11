import React from 'react';
import { Link } from 'react-router-dom';

class Register extends React.Component {
  render() {
    return (
      <div>
      <form>
        <label>
        <input type="text" value="" />
        Nome
        </label>
        <label>
        <input type="text" value="" />
        Idade
        </label>
        <label>
        <input type="text" value="" />
        Email
        </label>
      </form>
      <button>Register</button>
      <button>See registered clients
        <Link to="/clients"/>
      </button>
      </div>
    )
  }
}

export default Register;