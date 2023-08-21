const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {

  }

  type Book {

  }

  type Query {
    me: User
  }

  type Mutation {
    createUser(body: User!): User
    
  }
`;

module.exports = typeDefs;