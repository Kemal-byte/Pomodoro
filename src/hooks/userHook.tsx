import { useEffect, useReducer } from "react";
import authReducer, { initialStateUser } from "../reducer/authReducer";
import { writeTimerData } from "../../firebase/database";

const userHook = () => {
  const [state, dispatch] = useReducer(authReducer, initialStateUser);
  let localState = JSON.parse(localStorage.getItem("myUser"));
  useEffect(() => {
    console.log("INside ----------------------------");
    console.log(state);
    if (localState?.loggedIn == false) {
      console.log("INsie USER HOOK before LOCAL SET", state);
      localStorage.setItem("myUser", JSON.stringify(state));
    }
  }, [state?.loggedIn]);

  function setUserReducer(userid: string) {
    console.log(userid);
    dispatch({ type: "user_login", payload: userid });
  }
  return { setUserReducer, state };
};

export default userHook;
