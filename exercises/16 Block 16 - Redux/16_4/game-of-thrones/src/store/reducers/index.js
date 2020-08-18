import { LOAD, ADD_CHAR, ERR } from '../actions';

const INITIAL_STATE = {
  loading: false,
  //like isFetching
  error: '',
  character: '',
}

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true
      }
    case ADD_CHAR:
      return {
        ...state,
        loading: false,
        character: action.char[0],
      }
    case ERR:
      return {
        ...state,
        loading: false,
        error: action.err,
      }
    default:
      return state;
  }
}

export default reducer;
