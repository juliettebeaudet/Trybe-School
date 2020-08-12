import { LOG_IN } from '../actions';

const INITIAL_STATE = {
  email: '',
  password: '',
  logged: false,
};
//johndoe@gmail.com
//iloveredux

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOG_IN:
      // aqui condicionar para que seja um 
      if (action.email === 'ju' && action.password === 'be') {
        return { ...state, email: action.email, password: action.password, logged: true };
      } else {
        return state;
        // alert("no account, you need to register"); intuito seria de avisar isso
      }
    default:
      return state;
  }
};

export default loginReducer;
