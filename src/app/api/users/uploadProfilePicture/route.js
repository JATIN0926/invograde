import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

connect();

export async function POST(req) {
    try {
        const data = await req.formData();
        const file = data.get("file");
        const email = data.get("email");

        console.log(email, file)

        if (!file) {
            return NextResponse.json({success: false});
        }

        const bufferData = await file.arrayBuffer();
        console.log("llk")
        const buffer = Buffer.from(bufferData);

        const user = await User.findOne({email});
        if (!user) {
            return NextResponse.json({success: false});
        }

        console.log(user);

        user.profilePicture = buffer;

        await user.save();

        return NextResponse.json({
            response: "Successfully Updated",
            success: true
        });
    } catch (error) {
        return NextResponse.json(`An error occurred while signing up: ${error}`, { status: 500 });
    }
}


