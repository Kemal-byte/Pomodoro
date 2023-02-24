import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

function createUser(email, password) {
  console.log("inside createuser");
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}
export default createUser;
