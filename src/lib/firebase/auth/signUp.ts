import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase/firebase";

//テスト。　プッシュ時のアカウントが違うことによってコントリビューションがつかなかった。
//テスト2。　プッシュ時のアカウントが違うことによってコントリビューションがつかなかった。(マージした際に二つ反映されるか)

// syncの引数に、email, passwordを記入はfirebaseのドキュメントには乗ってないかも？
const signUp = async (email: string, password: string) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (e) {
    if (e instanceof FirebaseError) console.log(e);
  }
};

export default signUp;
