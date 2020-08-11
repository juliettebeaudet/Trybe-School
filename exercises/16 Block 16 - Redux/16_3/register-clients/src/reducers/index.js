import LOG_IN from '../actions';

const INITIAL_STATE = {
  email: '',
  password: '',
  logged: false,
};
//johndoe@gmail.com
//iloveredux

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOG_IN:
      if (action.email === 'johndoe@gmail.com' && action.password === 'iloveredux') {
        return { ...state, email: action.email, password: action.password, logged: true };
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default reducer;
