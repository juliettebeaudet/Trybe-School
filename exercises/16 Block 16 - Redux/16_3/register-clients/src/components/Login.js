import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import actionLogin from '../actions';

class Login extends React.Component {
  render() {
    if (!this.props.logged) {
      return (
        <div>
          <p>Faça seu log-in aqui:</p>
          <form>
            <label>
              <input type="text" value="" />
              Email
            </label>
            <label>
              <input type="text" value="" />
              Senha
            </label>
          </form>
          <button onClick={this.props.loggingIn}>LOG IN</button>
        </div>
      );
    }
    return <Redirect to="/clients" />;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  loggingIn: (log) => dispatch(actionLogin(log)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
