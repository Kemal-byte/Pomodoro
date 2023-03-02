import { useEffect, useReducer } from "react";
import authReducer, { initialStateUser } from "../reducer/authReducer";
import { writeTimerData } from "../../firebase/database";

const userHook = () => {
  const [state, dispatch] = useReducer(authReducer, initialStateUser);
  let localState = JSON.parse(localStorage.getItem("myUser"));
  useEffect(() => {
    localStorage.setItem("myUser", JSON.stringify(state));

    console.log("Inside SetUserReducer useEffect function", state);
  }, [state]);

  function setUserReducer(userid: string) {
    console.log(userid);
    dispatch({ type: "user_login", payload: userid });
  }
  return { setUserReducer };
};

export default userHook;
