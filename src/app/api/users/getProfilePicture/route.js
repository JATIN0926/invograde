import { connect } from "@/dbConfig/dbConfig";
import Image from "@/models/imageModel";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

connect();

export async function POST(req) {
    try {
        const { email } = await req.json();

        // to check if the user dosen't exists
        const user = await User.findOne({email});
        if (!user)
            return NextResponse.json({error: "User does not exist!"}, {status: 404});

        const image = await Image.findOne({email});
        if (!image)
            return NextResponse.json({error: "Image does not exist!"}, {status: 404});
        
        return NextResponse.json({
            message: "Profile fetched",
            success: true,
            profilePicture: image
        });
    } catch (error) {
        return NextResponse.json(`An error occurred while signing up: ${error}`, { status: 500 });
    }
}


