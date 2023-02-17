// import { useReducer } from "react";
type InitialState = {
  sets: number;
  break: number;
  timer: number;
  tags?: string;
  started: boolean;
};

export const initialState: InitialState = {
  sets: 1,
  break: 0,
  timer: 25,
  started: false,
};
export type ACTIONTYPE =
  | { type: "setting_timer"; payload: number }
  | { type: "duration_breaks"; payload: number }
  | { type: "numberOf_reps"; payload: number }
  | { type: "naming_tag"; payload: string }
  | { type: "started_timer"; payload: boolean };

const reducer = (state: InitialState = initialState, action: any) => {
  switch (action.type) {
    case "setting_timer":
      return {
        ...state,
        timer: action.payload,
      };
    case "duration_breaks":
      return {
        ...state,
        break: action.payload,
      };
    case "numberOf_reps":
      return {
        ...state,
        sets: action.payload,
      };
    case "naming_tag":
      return {
        ...state,
        tags: action.payload,
      };
    case "started_timer":
      return {
        ...state,
        started: action.payload,
      };
    default:
      throw new Error();
  }
};
export default reducer;
