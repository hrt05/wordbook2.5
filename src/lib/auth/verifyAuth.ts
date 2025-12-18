import { NextRequest } from "next/server";
import { adminAuth } from "../firebase/firebaseAdmin";

export async function verifyAuth(request: NextRequest) {
    try {
        // Authorizationヘッダーを取得
        const authHeader = request.headers.get("Authorization");

        if (!authHeader || !authHeader.startsWith("Bearer")) {
            throw new Error("認証トークンがありません");
        }

        // Bearerを取り除く // 上でBearerがあることが確保された状態
        const token = authHeader.replace("Bearer", "");

        // Firebase Admin SDKでトークンを検証 verifyIdTokenが IdTokenを確認するという意味
        const decodeToken = await adminAuth.verifyIdToken(token);

        console.log("認証成功", {userId: decodeToken.uid, email: decodeToken.email});

        return decodeToken;

    } catch (error) {
        console.error("トークン検証エラー:", error);

        // errorがErrorクラスから作られたオブジェクトかチェックしている。
        if (error instanceof Error) {

            // includesは含まれているかチェック
            if (error.message.includes("expired")) {
                throw new Error("トークンの有効期限が切れています");
            }

            if (error.message.includes("invalid")) {
                throw new Error("トークンが無効です");
            }

            throw new Error("認証に失敗しました");

        }

    }
}