import { onAuthStateChanged } from "firebase/auth";
import { increment, ref, set, update } from "firebase/database";
import {
  days,
  dbStructure,
  getWeekOfMonth,
  months,
  WeekNames,
} from "./databaseUtil";
import { db } from "./firebase";

const userRef = (id) => ref(db, `users/${id}`);
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const weekNumber = getWeekOfMonth(date);
const dayNumber = date.getDay();
/**
 * @function writeUserData will be called ONLY once when the user first created.
 * @param {string} userId
 */
export function writeUserData(userId) {
  console.log("Inside Write user Data");
  set(userRef(userId), dbStructure);
}

// export function writeTimerData(setUser) {
//   onAuthStateChanged(auth, (currentUser) => {
//     console.log("On Auth change triggered");
//     console.log(currentUser);
//   });
//   // dispatch({type: })
// }

/**
 * This function updates the data on the database. Push the values to firebase.
 * @param {string} userId
 */
export async function writeTimerData(userId, data) {
  console.log(data);
  // await update(
  //   ref(
  //     db,
  //     `users/${userId}/${year}/${months[month]}/${WeekNames[weekNumber]}/${days[dayNumber]}`
  //   ),
  //   {
  //     [data?.tag]: increment(data?.sets * data?.timer),
  //   }
  // );
}
