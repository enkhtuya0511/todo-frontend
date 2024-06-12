import { gql } from "graphql-tag";

export const typeDefs = gql`
  type task {
    _id: String
    userId: String
    subject: String
    status: String
    task: String
    priority: String
  }

  type Query {
    hello: String
    getAllTodos: [task]
    getTodo(taskId: String): task
  }

  input newTaskInput {
    userId: String
    subject: String
    status: String
    task: String
    priority: String
  }

  type Mutation {
    createNewTask(newTask: newTaskInput): task
  }
`;
