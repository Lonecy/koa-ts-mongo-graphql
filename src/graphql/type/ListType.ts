import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID } from 'graphql'
import BaseGraphQLType from "./BaseGraphQLType";

export default new GraphQLObjectType({
  name: 'list',
  fields: {
    title: { type: GraphQLString },
    groupId: { type: GraphQLID },
    order: { type: GraphQLInt },
    color: { type: GraphQLString },
    ...BaseGraphQLType
  }
})