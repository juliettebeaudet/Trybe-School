import { MOVE_CAR } from './actionCreators';

const initialState = {
  cars: {
    red: false,
    blue: false,
    yellow: false,
  },
};

function carReducer(state = initialState, action) {
  switch (action.type) {
    case MOVE_CAR:
      return { ...state, cars: { ...state.cars, [action.car]: action.side } };
    default:
      return state;
  }
}

export default carReducer;
