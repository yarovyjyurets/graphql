const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  enum StatusEnum {
    ACTIVE
    OFFLINE
    SLEEP
  }

  type User {
    id: ID!
    name: String!
    email: String!
    status: StatusEnum
    password: String
  }

  type Post {
    id: ID!
    content: String
    title: String
  }
  
  input PostInput {
    content: String!
    title: String!
  }

  type RootQuery {
    # USER
    getUsers: [User!]!
    getUser(id: ID!): User!

    # POST
    getPost(id: ID!): Post!
    
  }
  
  type RootMutation {
    # USER
    # POST
    addPost(post: PostInput!): Post!
    deletePost(id: ID!): Post!
  }
  
  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);