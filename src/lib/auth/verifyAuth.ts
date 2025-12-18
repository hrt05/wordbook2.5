import { NextRequest } from "next/server";
import { adminAuth } from "../firebase/firebaseAdmin";

export async function verifyAuth(request: NextRequest) {
    try {
        // Authorizationヘッダーを取得
        const authHeader = request.headers.get("Authorization");

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            throw new Error("認証トークンがありません");
        }

        // Bearerを取り除く // 上でBearerがあることが確保された状態
        const token = authHeader.replace("Bearer ", "");

        // Firebase Admin SDKでトークンを検証 verifyIdTokenが IdTokenを確認するという意味
        const decodedToken = await adminAuth.verifyIdToken(token);

        console.log("認証成功", { userId: decodedToken.uid, email: decodedToken.email });

        return decodedToken;

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
// ユーザーIDだけを取得する簡易版
export async function getUserId(request: NextRequest): Promise<string> {
    const decodedToken = await verifyAuth(request);

    if (!decodedToken) {
        throw new Error("認証に失敗しました")
    }

    return decodedToken.uid;
}