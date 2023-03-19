import { increment, onValue, ref, set, update } from "firebase/database";
import {
  days,
  dbStructure,
  getWeekOfMonth,
  months,
  WeekNames,
} from "./databaseUtil";
import { globalUser, db } from "./firebase";

const userRef = (id) => ref(db, `users/${id}`);
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
export const weekNumber = getWeekOfMonth(date);
const dayNumber = date.getDay();
/**
 * @function writeUserData will be called ONLY once when the user first created.
 * @param {string} userId
 */
export function writeUserData(userId) {
  // console.log("Inside Write user Data");
  set(userRef(userId), dbStructure);
}

/**
 * This function updates the data on the database. Pushes values to firebase.
 * @param {string} userId
 * @param {object} data
 */
export function writeTimerData(userId, data) {
  if (userId == null || userId == undefined) return;
  console.log(userId);
  // console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
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

  update(ref(db, `users/${userId}/${year}/${months[month]}`), {
    monthlyTotal: increment(data?.sets * data?.timer),
    [`monthlyCategories/${data?.tag}`]: increment(data?.sets * data?.timer),
  });
  writeMonthly(data, userId);
}
function writeMonthly(data, userId) {
  const userRef = ref(
    db,
    `users/${userId}/${year}/${months[month]}/${WeekNames[weekNumber]}`
  );

  let updates = {};
  updates = {
    weeklyTotal: increment(data?.sets * data?.timer),
    [`weeklyCategories/${data?.tag}`]: increment(data?.sets * data?.timer),
  };

  update(userRef, updates);
}

export const dataReader = () => {
  // console.log("datareader called");
  console.log(globalUser);
  if (!globalUser) return Promise.reject(new Error("No global user"));
  const userRef = ref(db, `users/${globalUser}/2023`);
  return new Promise((resolve, reject) => {
    onValue(
      userRef,
      (snapshot) => {
        const data = snapshot.val();
        resolve(data);
      },
      (error) => {
        reject(error);
      }
    );
  });
};
/**
 * Mistakes along the way.
 *
 * 1 - When writing writeMontly(), I typed like this;
 * updates = {
 * weeklyCategories: {
 *  [data.tag]: increment(data?.sets * data?.timer) }}
 * It was replacing the previous data and wasn't updating correctly. Everytime this method is called,
 * it was overwriting the previous data. The correct way to do this is shown as above.
 */
