import { getUserId } from "@/lib/auth/verifyAuth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const userId = await getUserId(request);
        console.log("ユーザーID:", userId);

        // ダミーデータ
        const dummyWordbooks = [
            {
                id: "1",
                title: "はじめての英単語",
                userId: userId,
            },
        ];

        return NextResponse.json({
            success: true,
            data: dummyWordbooks,
        });

    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json(
                { error: error.message },
                { status: 401 }
            );
        }

        return NextResponse.json(
            { error: "サーバーエラー" },
            { status: 500 }
        );
    }
}