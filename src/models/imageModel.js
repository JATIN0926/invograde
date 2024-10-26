import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    data: String,
    email: String,
});


const Image = mongoose.models.images || mongoose.model("images", imageSchema);

export default Image;