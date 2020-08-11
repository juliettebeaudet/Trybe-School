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
      // if (action.email === '') {
        return { ...state, email: action.email, password: action.password, logged: true };
      // } else {
      //   return state;
      // }
    default:
      return state;
  }
};

export default loginReducer;
