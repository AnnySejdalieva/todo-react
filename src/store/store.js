import {applyMiddleware, compose, createStore} from 'redux';
import  thunkMiddleware from 'redux-thunk'
import reducer from './reduser';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware)),
);

export default store;