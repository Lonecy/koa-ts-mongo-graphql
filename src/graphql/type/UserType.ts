import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'
import BaseGraphQLType from "./BaseGraphQLType";

export default new GraphQLObjectType({
  name: 'user',
  fields: {
    _id: {type: GraphQLString},
    name: { type: GraphQLString },
    sex: { type: GraphQLInt },
    ...BaseGraphQLType
  }
})