import admin from "firebase-admin";

if (!admin.apps.length) {
    try {
        // adminを初期化します
        admin.initializeApp({
            credential: admin.credential.cert({
                projectId: process.env.FIREBASE_PROJECT_ID,
                clientEmail: process.env.FIREBASE_CLIENT_EMAIL,

                // ?.はオプションチェーン (存在しないなら、undefinedを返す, 存在するならreplaceを実行)
                // privateKeyの改行文字を正しく処理
                privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n") // \nを本物の改行として変換している。
            }),
        });
        console.log("Firebaseの初期化に成功しました")
    }
    catch (error) {
        console.error("Firebaseの初期化に失敗しました", error);
    }
}