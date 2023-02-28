import { ref, set } from "firebase/database";
import { dbStructure } from "./databaseUtil";
import { db } from "./firebase";

const userRef = (id) => ref(db, `users/${id}`);

// Write data using set()
export function writeUserData(userId) {
  console.log("Inside Write user Data");
  set(userRef(userId), dbStructure);
}
