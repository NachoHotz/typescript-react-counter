import { ActionType } from "./names";

export const increment = () => {
  return { type: ActionType.INCREMNET };
}

export const decrement = () => {
  return { type: ActionType.DECREMENT };
}

export const reset = () => {
  return { type: ActionType.RESET };
}
