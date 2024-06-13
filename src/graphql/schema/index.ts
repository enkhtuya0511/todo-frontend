// import { gql } from "graphql-tag";
import { mergeTypeDefs } from "@graphql-tools/merge";

// export const typeDefs = gql`
//   type task {
//     _id: String!
//     userId: String
//     subject: String!
//     status: String
//     task: String!
//     priority: String
//   }

//   type Query {
//     getAllTodos: [task]!
//     getTodo(taskId: String): task!
//   }

//   input newTaskInput {
//     userId: String
//     subject: String
//     status: String
//     task: String
//     priority: String
//   }

//   input updateTaskInput {
//     _id: String!
//     subject: String
//     status: String
//     task: String
//     priority: String
//   }

//   type Mutation {
//     createNewTask(input: newTaskInput!): task
//     updateTask(input: updateTaskInput!): task
//     deleteTask(taskId: String): task
//   }
// `;

import { userTypeDefs } from "./user.typeDef";
import { taskTypeDefs } from "./task.typeDef";

const mergedTypeDefs = mergeTypeDefs([userTypeDefs, taskTypeDefs]);

export default mergedTypeDefs;
