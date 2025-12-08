import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase/firebase";
import { FirebaseError } from "firebase/app";

const login = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    // console.log("ログイン完了", signInWithEmailAndPassword);
    alert("ログインが成功しました。")
    return true;
  } catch (e) {
    // if (e instanceof FirebaseError) console.log(e);
    if (e instanceof FirebaseError) alert("メールアドレスまたはパスワードが違います。")
  }
};

export default login;
