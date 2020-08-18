export const LOG_IN = 'LOG_IN';

const actionLogin = (email, password) => {
  return {
    type: LOG_IN,
    email,
    password,
  }
}

export default actionLogin;
