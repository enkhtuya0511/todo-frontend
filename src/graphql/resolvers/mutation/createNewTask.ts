import { TaskModel } from "@/graphql/models/taks-model";

export async function createNewTask(parent: any, { newTask }: any) {
  try {
    const { userId, subject, status, task, priority } = newTask;
    const newTodo = await TaskModel.create({
      userId,
      subject,
      status,
      task,
      priority,
    });

    return newTodo;
  } catch (err) {
    return err;
  }
}
