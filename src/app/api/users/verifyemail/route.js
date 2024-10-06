import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

connect();

export async function POST(request) {
  try {
    console.log("\n\n\nhere")
    const reqBody = await request.json();
    const { id, otp } = reqBody;
    console.log("\n\n\n\n\n", id, otp)

    const user = await User.findOne({
      _id: id,
      verifyToken: otp,
      verifyTokenExpiry: { $gt: Date.now() }, // it means greater than Date.now()
    });

    if (!user)
      return NextResponse.json({ error: "Invalid Token!" }, { status: 400 });

    user.isVerified = true;
    // since we no longer need the verifytoken and its expiry
    user.verifyToken = undefined;
    user.verifyTokenExpiry = undefined;

    await user.save();

    return NextResponse.json({
        message: "Email verified successfully!",
        success: true
    });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}