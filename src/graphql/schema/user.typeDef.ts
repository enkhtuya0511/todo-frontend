import { gql } from "graphql-tag";

export const userTypeDefs = gql`
  type user {
    username: String
    email: String!
    password: String!
  }

  type Query {
    getAllUsers: [user]!
  }
`;
