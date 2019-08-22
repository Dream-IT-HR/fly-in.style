import initialState from './initialState';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducersInit';

const middleware = applyMiddleware(promise, thunk);

const store = createStore(reducer, initialState, composeWithDevTools(middleware));

export default store;

