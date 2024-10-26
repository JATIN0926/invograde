import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = NextResponse.json({
            message: "Logout Successfull",
            success: true
        });

        response.cookies.set("token", "", {
            httpOnly: true,
            expires: new Date(0)
        });
        return response;
    } catch (error) {
        NextResponse.json({message: `Following error while trying to logout :\n${error}`}, {status: 500});
    }
}