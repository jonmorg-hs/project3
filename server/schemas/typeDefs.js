const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    blastCount: Int
    savedBlasts: [Blast]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Blast {
    blastid: ID!
    blastName: String
  }

  input InputBlast {
    blastId: String
    blastName: String
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBlast(newBlast: InputBlast!): User
    removeBlast(blastId: ID!): User
  }
`;

module.exports = typeDefs;
