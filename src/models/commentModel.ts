import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CourseVideo",
    required: true,
  },
  comment: {
    type: String,
    required: [true, "Please provide a comment"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Comment =
  mongoose.models.users || mongoose.model("Comments", commentSchema);

export default Comment;
