import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  _id: String,
  userId: String,
  subject: String,
  status: {
    type: String,
    enum: ["pending", "processing", "success", "failed"],
    default: "pending",
  },
  task: String,
  priority: String,
});

export const TaskModel =
  mongoose.models?.task || mongoose.model("task", taskSchema);
