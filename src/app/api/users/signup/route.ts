import { connect } from "../../../../dbConfig/dbConfig";
import User from "../../../../models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();

export async function POST(req: NextRequest) {
    try {
        const { name, username, email, password, bio, profile_title } = await req.json();

        // to check if the user already exists
        const user = await User.findOne({email});
        if (user)
            return NextResponse.json({error: "User already exists!"}, {status: 400});


        // hash password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const newUser = await User.create({
            name,
            username,
            email,
            password_hash: hashedPassword,
            bio,
            profile_title
        });
        const savedUser = await newUser.save();

        // to add send verification email

        return NextResponse.json({
            message: "User created successfully!",
            success: true,
            savedUser
        });
    } catch (error) {
        return NextResponse.json(`An error occurred while signing up: ${error}`, { status: 500 });
    }
}


