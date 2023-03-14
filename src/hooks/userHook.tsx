// import { useEffect, useReducer } from "react";
// import authReducer, { initialStateUser } from "../reducer/authReducer";
// import { writeTimerData } from "../../firebase/database";

// const userHook = () => {
//   const [state, dispatch] = useReducer(authReducer, initialStateUser);
//   let localState = JSON.parse(localStorage.getItem("myUser"));

//   //! Refactor this code it mess up the localstore and fires up unexpectedly.
//   useEffect(() => {
//     console.log("amina koyim.");
//     if (localState?.loggedIn == false) {
//       console.log(state);
//       localStorage.setItem("myUser", JSON.stringify(state));
//     }
//     dispatch({ type: "user_login", payload: localState?.userId });
//     console.log(state);
//     console.log("User logged in baby");
//   }, [state?.loggedIn]);

//   // useEffect(() => {
//   //   console.log("INside ----------------------------");
//   //   console.log(state);
//   //   if (localState?.loggedIn == false) {
//   //     console.log("INsie USER HOOK before LOCAL SET", state);
//   //     localStorage.setItem("myUser", JSON.stringify(state));
//   //   } else {
//   //     dispatch({ type: "user_login", payload: localState?.userId });
//   //   }
//   // }, [state?.loggedIn]);

//   function setUserReducer(userid: string) {
//     console.log(userid);
//     dispatch({ type: "user_login", payload: userid });
//   }
//   return { setUserReducer, state };
// };

// export default userHook;
