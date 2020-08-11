import { createStore, combineReducers } from 'redux';
import reducer from '../reducers';

// rootReducer = combinerReducers({reducer});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;