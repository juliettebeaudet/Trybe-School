// arquivo App.js, criado pelo create-react-app, modificado
import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Users from './Users';
import StrictAccess from './StrictAccess';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
    this.user = {username:"jeanne", password:"1234"};
  }

  render() {
    return (
      <BrowserRouter>
        {/* <Home /> */}
        <Switch>
          {/* Dentro do Switch, ordenar do mais especifico ao mais genêrico */}
        <Route exact path="/" component={Home} />
        <Route path="/users/:id" component={Users} />
        <Route path="/users" render={(props ) => <Users {...props} greetingMessage="Good morning" />} />
        {/* <Route path="/strict-access/:userLog" component={StrictAccess} /> */}
        <Route path="/strict-access/" render={(props) => <StrictAccess {...props} user={this.user} />} />
        <Route path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    );
  }
}

// 14. Adicione no componente App uma rota que mapeie o caminho de URL "/strict-access" para o componente StrictAccess. Para poder testar o fluxo de autenticação, passe para a prop user de StrictAccess diferentes valores para as propriedades username e password.

export default App;
