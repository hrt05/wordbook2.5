import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase/firebase";
import { FirebaseError } from "firebase/app";

const login = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("ログイン完了", signInWithEmailAndPassword);
  } catch (e) {
    if (e instanceof FirebaseError) console.log(e);
  }
};

export default login;
