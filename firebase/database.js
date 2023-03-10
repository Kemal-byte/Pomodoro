import { onAuthStateChanged } from "firebase/auth";
import { increment, ref, set, update } from "firebase/database";
import {
  days,
  dbStructure,
  getWeekOfMonth,
  months,
  WeekNames,
} from "./databaseUtil";
import { auth, db } from "./firebase";

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
const userId = auth.currentUser?.uid;
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

export function writeTimerData(userId, data) {
  console.log(data);
  const userRef = ref(
    db,
    `users/${userId}/${year}/${months[month]}/${WeekNames[weekNumber]}/${days[dayNumber]}`
  );

  let updates = {};
  updates = {
    [data?.tag]: increment(data?.sets * data?.timer),
    dailyTotal: increment(data?.sets * data?.timer),
  };
  update(userRef, updates);

  writeMonthly(data);
  // update(
  //   ref(
  //     db,
  //     `users/${userId}/${year}/${months[month]}/${WeekNames[weekNumber]}`
  //   ),
  //   {
  //     weeklyTotal: increment(data?.sets * data?.timer),
  //   }
  // );
  update(ref(db, `users/${userId}/${year}/${months[month]}`), {
    monthlyTotal: increment(data?.sets * data?.timer),
  });
}
function writeMonthly(data) {
  const userRef = ref(
    db,
    `users/${userId}/${year}/${months[month]}/${WeekNames[weekNumber]}`
  );
  console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
  console.log(userId);
  let updates = {};
  updates = {
    weeklyTotal: increment(data?.sets * data?.timer),
    [`weeklyCategories/${data?.tag}`]: increment(data?.sets * data?.timer),
  };

  update(userRef, updates);
}
