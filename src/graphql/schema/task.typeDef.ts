import { gql } from "graphql-tag";

export const taskTypeDefs = gql`
  type task {
    _id: String!
    userId: String
    subject: String!
    status: String
    task: String!
    priority: String
  }

  type Query {
    getAllTodos: [task]!
    getTodo(taskId: String): task!
  }

  input newTaskInput {
    userId: String
    subject: String
    status: String
    task: String
    priority: String
  }

  input updateTaskInput {
    _id: String!
    subject: String
    status: String
    task: String
    priority: String
  }

  type Mutation {
    createNewTask(input: newTaskInput!): task
    updateTask(input: updateTaskInput!): task
    deleteTask(taskId: String): task
  }
`;
