import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase/firebase";
import { FirebaseError } from "firebase/app";

const login = async (email: string, password: string) => {
  try {

    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const token = await userCredential.user.getIdToken();

    // 後で絶対消す
    console.log(token)
    console.log("ログイン完了", signInWithEmailAndPassword);

    await signInWithEmailAndPassword(auth, email, password);
    // console.log("ログイン完了", signInWithEmailAndPassword);
    alert("ログインが成功しました。")
    return { success:true, token:token }
  } catch (e) {
    // if (e instanceof FirebaseError) console.log(e);
    if (e instanceof FirebaseError) alert("メールアドレスまたはパスワードが違います。")
  }
};

export default login;
