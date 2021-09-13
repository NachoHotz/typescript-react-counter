import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducer/index';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export type State = ReturnType<typeof rootReducer>
export default store;
