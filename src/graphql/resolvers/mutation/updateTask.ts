import { UpdateTaskInput } from "@/graphql/generated/client";
import { TaskModel } from "@/graphql/models/task-model";

export async function updateTask(
  parent: any,
  { input }: { input: UpdateTaskInput }
) {
  try {
    const updatedTask = await TaskModel.findByIdAndUpdate(
      input._id,
      { ...input },
      { new: true }
    );

    return updatedTask;
  } catch (error) {
    console.error("error updating task: ", error);
  }
}
