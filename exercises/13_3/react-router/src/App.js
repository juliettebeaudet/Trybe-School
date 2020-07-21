// arquivo App.js, criado pelo create-react-app, modificado
import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Users from './Users';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* <Home /> */}
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/users" render={(props ) => <Users {...props} greetingMessage="Good morning" />} />
        {/* <Route path="/users/:id" component={Users} /> */}
      </BrowserRouter>
    );
  }
}

export default App;
