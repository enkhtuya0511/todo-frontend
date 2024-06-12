import { TaskModel } from "@/graphql/models/taks-model";

export async function getAllTodos() {
  try {
    const todos = await TaskModel.find({});
    return todos;
  } catch (err) {
    return err;
  }
}
