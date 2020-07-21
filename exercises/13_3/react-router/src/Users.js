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

export default Users;