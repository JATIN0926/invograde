import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/helpers/emailSender";
import otpGenerator from "otp-generator";

connect();

export async function POST(req) {
    try {
        const { name, username, email, password, bio, profile_title, profilePicture } = await req.json();

        // to check if the user already exists
        const user = await User.findOne({email});
        if (user)
            return NextResponse.json({error: "User already exists!"}, {status: 400});


        // hash password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        // generate otp
        const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });

        const newUser = await User.create({
            name: name.toLowerCase(),
            username: username.toLowerCase(),
            email: email,
            password_hash: hashedPassword,
            bio: bio.toLowerCase(),
            profile_title: profile_title.toLowerCase(),
            profilePicture: profilePicture.toLowerCase(),
            verifyToken: otp,
            verifyTokenExpiry: Date.now() + 3600000
        });
        const savedUser = await newUser.save();

        // send verification email
        sendEmail({
            to: email,
            subject: "Verify your email",
            text: ` <b>${otp}</b> is your otp for verification to InvoGrade!`
        });

        return NextResponse.json({
            message: "User created successfully!",
            success: true,
            savedUser
        });
    } catch (error) {
        return NextResponse.json(`An error occurred while signing up: ${error}`, { status: 500 });
    }
}


