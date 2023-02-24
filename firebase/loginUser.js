import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

function signIn(email, password) {
  console.log("Inside Sign in");
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}
export default signIn;
