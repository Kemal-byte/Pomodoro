import { onAuthStateChanged } from "firebase/auth";
import { ref, set } from "firebase/database";
import { dbStructure } from "./databaseUtil";
import { auth, db } from "./firebase";

const userRef = (id) => ref(db, `users/${id}`);

/**
 * @function writeUserData will be called ONLY once when the user first created.
 * @param {string} userId
 */
export function writeUserData(userId) {
  console.log("Inside Write user Data");
  set(userRef(userId), dbStructure);
}

export function writeTimerData(setUser) {
  onAuthStateChanged(auth, (currentUser) => {
    console.log("On Auth change triggered");
    console.log(currentUser);
  });
  // dispatch({type: })
}
