// import { useReducer } from "react";
type InitialState = {
  sets: number;
  break: number;
  timer: number;
  tags?: string;
};

export const initialState: InitialState = {
  sets: 0,
  break: 0,
  timer: 25,
};
type ACTIONTYPE =
  | { type: "setting_timer"; payload: number }
  | { type: "duration_breaks"; payload: number }
  | { type: "numberOf_reps"; payload: number }
  | { type: "naming_tag"; payload: string };

const reducer = (state: typeof initialState, action: ACTIONTYPE) => {
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
  }
};
export default reducer;
