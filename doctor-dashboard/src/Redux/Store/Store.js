import { applyMiddleware, combineReducers, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import rootReducer from '../Reducer/RootReducer'

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);
export default store;
