import { connect } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";
import Project from "@/models/projectModel";

connect();

export async function POST(request) {
    try {
        const { id } = await request.json();

        const project = await Project.findOne({ _id: id });
        if (!project) {
            return NextResponse.json({error: "No such project!"}, {status: 404});
        }

        return NextResponse.json({
            message: "Project Found!",
            project,
            success: true,
        });
    } catch (error) {
        return NextResponse.json({
            error: "An error occurred while fetching project! " + error,
        }, { ststus: 500 });
    }
}


