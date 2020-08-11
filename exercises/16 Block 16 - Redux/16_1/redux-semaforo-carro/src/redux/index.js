import { createStore, combineReducers } from 'redux';
import carReducer from './carReducer';
import trafficReducer from './trafficReducer';

const rootReducer = combineReducers({carReducer, trafficReducer});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
