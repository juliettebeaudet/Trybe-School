import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from '../src/store';
import Home from '../src/components/Home';
import Login from '../src/components/Login';
import Client from '../src/components/Client';
import Register from './components/Register';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/client" component={Client} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
