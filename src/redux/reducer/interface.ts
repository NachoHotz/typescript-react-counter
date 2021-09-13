import { ActionType } from '../actions/names';

interface IncrementAction { type: ActionType.INCREMNET }
interface DecrementAction { type: ActionType.DECREMENT }
interface ResetAction { type: ActionType.RESET }

export type Action = IncrementAction | DecrementAction | ResetAction
