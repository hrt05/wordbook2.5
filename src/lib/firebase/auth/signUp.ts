import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase/firebase";

// syncの引数に、email, passwordを記入はfirebaseのドキュメントには乗ってないかも？
const signUp = async (email: string, password: string) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    // console.log("登録完了" ,createUserWithEmailAndPassword);
    alert("登録が完了しました。")
    return true;
  } catch (e) {
    // if (e instanceof FirebaseError) console.log(e);
    if (e instanceof FirebaseError) alert("アカウント作成に失敗しました")
  }
};

export default signUp;
