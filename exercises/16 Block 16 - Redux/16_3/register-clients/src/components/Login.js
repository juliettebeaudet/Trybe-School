import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import actionLogin from '../actions';
// import loginReducer from '../reducers';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }
  render() {
    const { logged, login } = this.props;
    const { email, password } = this.state;
    if (!logged) {
      return (
        <div>
          <p>Faça seu log-in aqui:</p>
          <input type="text" value={email} placeholder="Email"
          onChange={e => this.setState({email: e.target.value })}
          />
          <input type="text" value={password} placeholder="Senha"
          onChange={e => this.setState({password: e.target.value })}
          />
          <button onClick={() => login(email, password)}>LOG IN</button>
        </div>
      );
    }
    return <Redirect to="/client" />;
  }
}

const mapStateToProps = (state) => ({
  // email: state.loginReducer.email,
  // password: state.loginReducer.password,
  logged: state.loginReducer.logged,
});

const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => dispatch(actionLogin(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
