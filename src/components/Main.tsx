import React, { useEffect, useReducer } from "react";
import reducer, { initialState } from "../reducer/reducer";
import Graphs from "./graphs";
import Inputs from "./Inputs";
import Tasks from "./tasks";
import Timer from "./Timer";
import SettingComp from "./settings";
// import userHook from "../hooks/userHook";
import { initialStateUser } from "../reducer/authReducer";

const Main = ({ graph, settings }) => {
  let localState = JSON.parse(localStorage.getItem("myState"));
  let localUser = JSON.parse(localStorage.getItem("myUser"));
  let [state, dispatch] = useReducer(reducer, localState || initialState);

  let content;
  // const { setUserReducer } = userHook();

  /**
   * When the initial state is changed, we are updating the local storage.
   */
  useEffect(() => {
    localStorage.setItem("myState", JSON.stringify(state));
    if (localUser?.loggedIn) {
      // console.log("//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
      console.log(localUser);
      // setUserReducer(localUser?.userId);
    }
  }, [state]);
  useEffect(() => {
    if (!localUser) {
      localStorage.setItem("myUser", JSON.stringify(initialStateUser));
    }
  }, []);

  if (!graph && !settings) {
    content = (
      <>
        <Inputs state={state} dispatch={dispatch} />
        <Timer state={state} dispatch={dispatch} />
        <Tasks />
      </>
    );
  } else if (graph) {
    content = <Graphs />;
  } else if (settings) {
    content = <SettingComp />;
  }
  return content;
};
export default Main;
