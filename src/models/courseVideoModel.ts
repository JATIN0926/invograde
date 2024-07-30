import mongoose from "mongoose";

const courseVideoSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  video_file: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "projectVideos.files",
  },

  title: {
    type: String,
    required: [true, "Please provide a title"],
  },
  description: {
    type: String,
    required: [true, "Please provide a description"],
  },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comments" }],
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Likes" }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const CourseVideo =
  mongoose.models.users || mongoose.model("CourseVideos", courseVideoSchema);

export default CourseVideo;
