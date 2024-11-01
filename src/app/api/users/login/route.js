import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(req) {
    try {
        const { email, password } = await req.json();

        // to check if the user dosen't exists
        const user = await User.findOne({email});
        if (!user)
            return NextResponse.json({error: "User does not exist!"}, {status: 404});
        
        // check password
        const validPassword = await bcryptjs.compare(password, user.password_hash);
        
        if (!validPassword)
            return NextResponse.json({message: "invalid password!"}, {status: 400});

        // create token data
        const tokenData = {
            id: user._id,
            username: user.username,
            name: user.name,
            email: user.email,
        };

        // create token
        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET, {expiresIn: "1d"});
        
        const response = NextResponse.json({
            message: "Login Successful",
            success: true,
        });

        response.cookies.set("token", token, {httpOnly: true});

        return response;
    } catch (error) {
        return NextResponse.json(`An error occurred while signing up: ${error}`, { status: 500 });
    }
}


