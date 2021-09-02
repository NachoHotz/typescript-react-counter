import { Action } from './interface';
import { ActionType } from '../actions/names';

const initialState = 0;

const rootReducer = (state = initialState, action: Action) => {
  switch(action.type) {
    case ActionType.INCREMNET : return state + 1;
    case ActionType.DECREMENT: return state - 1;
    case ActionType.RESET: return state = 0;
    default: return state;
  }
}

export default rootReducer;
