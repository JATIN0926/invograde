import { connect } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";
import User from "@/models/userModel";
import Project from "@/models/projectModel";
import Image from "@/models/imageModel";

connect();

export async function POST(request) {
    try {
        const { userId, title, description, skills_used, domain, tags, project_link, images } = await request.json();
        // console.log(userId, title, description, skills_used, domain, tags, project_link, images);

        const user = await User.findOne({_id: userId});
        if (!user) {
            return NextResponse.json({
                error: "Invalid Request: User Does Not Exist!"
            }, { ststus: 404 });
        }
        // console.log(user);

        // create images
        const imageIds = [];
        if (images) {
            for (let imageData of images) {
                const newImage = await Image.create({ name: "Project Image", data: imageData, email: user.email });
                await newImage.save();
                imageIds.push(newImage._id);
            }
        }
        // console.log(imageIds);

        const newProject = await Project.create({
            userId: user._id,
            title: title.toLowerCase(),
            description: description.toLowerCase(),
            skills_used,
            domain: domain.toLowerCase(),
            tags,
            project_link,
            images: imageIds,
        });
        console.log(newProject);

        await newProject.save();

        return NextResponse.json({
            message: "Project Created Successfully!",
            success: true,
        });
    } catch (error) {
        return NextResponse.json({
            error: `An error occurred while trying to create Project \t ${error}`
        }, { status: 500 });
    }
}




