import { createUserWithEmailAndPassword } from "firebase/auth";
import { writeUserData } from "./database";
import { auth } from "./firebase";

async function createUser(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      return user;
    })
    .then((userInfo) => {
      writeUserData(userInfo.uid);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}
export default createUser;
