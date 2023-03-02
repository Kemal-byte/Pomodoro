import { signInWithEmailAndPassword } from "firebase/auth";
import { writeTimerData } from "./database";
import { auth } from "./firebase";

async function signIn(email, password) {
  console.log("Inside Sign in");
  let userInfo;
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    userInfo = userCredential.user;
    console.log(userInfo);
    writeTimerData();
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
  }
  console.log(userInfo);
  return userInfo;
}
export default signIn;
