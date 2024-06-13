import { NewTaskInput } from "@/graphql/generated/client";
import { TaskModel } from "@/graphql/models/task-model";

export async function createNewTask(
  parent: any,
  { input }: { input: NewTaskInput }
) {
  try {
    const newTodo = await TaskModel.create({
      ...input,
    });

    return newTodo;
  } catch (err) {
    console.error("error creating task: ", err);
    return err;
  }
}
