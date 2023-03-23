import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { writeTimerData } from "./database";
import { auth } from "./firebase";
import ToastifyNotification from "../src/utilities/popup";

const { NotifyLogin } = ToastifyNotification();
async function signIn(email, password) {
  console.log("Inside Sign in");

  let userInfo;
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    NotifyLogin("Login Successful");
    userInfo = userCredential.user;
    console.log(userInfo);
    writeTimerData();
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    NotifyLogin("Login Failed");
  }
  console.log(userInfo);
  return userInfo;
}

export async function logOut() {
  await signOut(auth);
  NotifyLogin("Logged out successfully");
}
export default signIn;
