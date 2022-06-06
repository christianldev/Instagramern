const { gql } = require('apollo-server-express');

const typeDefs = gql`
  scalar Upload

  type User {
    id: ID
    name: String
    username: String
    email: String
    avatar: String
    siteWeb: String
    description: String
    password: String
    createAt: String
  }
  type Token {
    token: String
  }

  type UpdateAvatar {
    status: Boolean
    urlAvatar: String
  }

  type Publish {
    status: Boolean
    urlFile: String
  }

  type Publication {
    _id: ID
    idUser: User
    file: String
    typeFile: String
    title: String
    description: String
    createAt: String
  }

  type Comment {
    _id: ID
    idPublication: ID
    idUser: User
    comment: String
    date: String
  }

  input UserInput {
    name: String!
    username: String!
    email: String!
    password: String!
  }

  input LoginInput {
    # login with email or username
    email: String!
    username: String
    password: String!
  }

  input UserUdateInput {
    name: String
    username: String
    email: String
    currentPassword: String
    newPassword: String
    siteWeb: String
    description: String
  }

  input PublicationInput {
    title: String
    description: String
  }

  input CommentInput {
    idPublication: ID
    comment: String
  }

  type Query {
    #USER
    getUser(id: ID, username: String): User
    searchUsers(search: String): [User]

    #FOLLOW
    isFollow(username: String!): Boolean
    getFollowers(username: String!): [User]
    getFollowing(username: String!): [User]

    #PUBLICATION
    getPublications(username: String!): [Publication]

    #COMMENT
    getComments(idPublication: ID!): [Comment]

    #GET LIKES
    isLike(idPublication: ID!): Boolean
    getCountLikes(idPublication: ID!): Int
  }

  type Mutation {
    #Create a new User
    register(input: UserInput): User!
    login(input: LoginInput): Token!
    updateAvatar(file: Upload): UpdateAvatar
    deleteAvatar: Boolean
    updateUser(input: UserUdateInput): Boolean

    #Follow
    follow(username: String!): Boolean
    unFollow(username: String!): Boolean

    #Publiccations
    publish(file: Upload, input: PublicationInput): Publish

    #Comments
    addComment(input: CommentInput): Comment

    #Likes
    addLike(idPublication: ID!): Boolean
    removeLike(idPublication: ID!): Boolean
  }

  type Subscription {
    followAdded: User!
    unFollowAdded: User!
    likeAdded: Publication!
    likeRemoved: Publication!
  }
`;

module.exports = typeDefs;
