import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'
import BaseGraphQLType from "./BaseGraphQLType";

export default new GraphQLObjectType({
  name: 'group',
  fields: {
    title: { type: GraphQLString },
    order: { type: GraphQLInt },
    ...BaseGraphQLType
  }
})