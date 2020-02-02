import { GraphQLSchema, GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt } from "graphql";
import GroupType from "../type/GroupType";
import UserType from "../type/UserType";
import UserService from "../../service/UserService";
import { UserAdd, UserDel, UserQuery, UserQueryList, UserUpdate } from "./UserGraphQLSchema";
import { TodoAdd, TodoDel, TodoList, TodoUpdate } from "./TodoGraphQLSchema";



export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Queries',
    fields: {
      user: UserQuery,
      users: UserQueryList,
      todos: TodoList
    }
  }),
  mutation: new GraphQLObjectType({
    name: "Mutations",
    fields: {
      addUser: UserAdd,
      delUser: UserDel,
      updateUser: UserUpdate,
      addTodo: TodoAdd,
      delTodo: TodoDel,
      updateDodo: TodoUpdate,
    }
  })
})