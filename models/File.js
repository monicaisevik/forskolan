import mongoose from "mongoose";

const { Schema } = mongoose;

const fileSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
   
    
  },
  { timestamps: true }
);

export default mongoose.models.File || mongoose.model("File", fileSchema);