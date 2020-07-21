// arquivo App.js, criado pelo create-react-app, modificado
import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Users from './Users';
import StrictAccess from './StrictAccess';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* <Home /> */}
        <Switch>
          {/* Dentro do Switch, ordenar do mais especifico ao mais genêrico */}
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/strict-access" component={StrictAccess} />
        {/* <Route path="/users" render={(props ) => <Users {...props} greetingMessage="Good morning" />} /> */}
        <Route path="/users/:id" component={Users} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
