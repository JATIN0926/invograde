import { getDataFromToken } from "@/helpers/getDataFromToken";
import {  NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function GET(request) {
  try {
    const user = getDataFromToken(request);
    return NextResponse.json({ message: "User Found", data: user });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}