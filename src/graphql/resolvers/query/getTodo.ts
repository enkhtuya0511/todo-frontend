import { TaskModel } from "@/graphql/models/taks-model";

export async function getTodo(parent: any, { taskId }: { taskId: string }) {
  try {
    const task = await TaskModel.findById(taskId);
    if (!task) return;

    return task;
  } catch (err) {
    return err;
  }
}
