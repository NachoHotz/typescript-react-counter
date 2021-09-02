import { ActionType } from '../actions/names';

interface IncrementAction {
  type: ActionType.INCREMNET,
  payload: number,
}

interface DecrementAction {
  type: ActionType.DECREMENT,
  payload: number,
}

interface ResetAction {
  type: ActionType.RESET,
  payload: number,
}

export type Action = IncrementAction | DecrementAction | ResetAction
