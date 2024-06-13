import { QueryGetTodoArgs } from "@/graphql/generated/client";
import { TaskModel } from "@/graphql/models/task-model";

export async function getTodo(
  parent: any,
  { taskId }: { taskId: QueryGetTodoArgs }
) {
  try {
    const task = await TaskModel.findById(taskId);
    if (!task) return;

    return task;
  } catch (err) {
    return err;
  }
}
