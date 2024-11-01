import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  images: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "images",
    },
  ],
  title: {
    type: String,
    required: [true, "Please provide a title"],
  },
  description: {
    type: String,
    required: [true, "Please provide a description"],
  },
  skills_used: {
    type: [String],
    required: [true, "Please provide skills used"],
  },
  domain: {   // design or dev
    type: String,
    enum: ["design", "dev"],
    required: [true, "Providing a domain is important"],
  },
  tags: {
    type: [String],
  },
  project_link: {
    type: String,
    required: [true, "Please provide project link"],
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

const Project =
  mongoose.models.projects || mongoose.model("projects", projectSchema);

export default Project;
