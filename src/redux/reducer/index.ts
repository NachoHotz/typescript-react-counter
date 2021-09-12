import { Action } from './interface';
import { ActionType } from '../actions/names';
import { InitialState } from './stateInterface';

const initialState: InitialState = {
  counter: 0,
};

const rootReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.INCREMNET: return { ...state, counter: state.counter + 1 };
    case ActionType.DECREMENT: return { ...state, counter: state.counter - 1 };
    case ActionType.RESET: return { ...state, counter: (state.counter = 0) };
    default: return state;
  }
};

export default rootReducer;
