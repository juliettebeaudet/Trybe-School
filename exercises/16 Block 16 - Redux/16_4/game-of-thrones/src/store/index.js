//importe o método applyMiddleware 
import { createStore, compose, applyMiddleware } from 'redux';
//importe o redux-thunk
import thunk from 'redux-thunk';
import reducer from '../store/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//aplique o middleware
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
