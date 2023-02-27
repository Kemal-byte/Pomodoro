import { ref, set } from "firebase/database";
import { dbStructure } from "./databaseUtil";
import { db } from "./firebase";

const userRef = ref(db, "users/3");

// Write data using set()
export function writeUserData(userId) {
  //   console.log(db);
  console.log("Inside Write user Data");
  //   console.log(userId);
  set(userRef, dbStructure);
  console.log();
}
