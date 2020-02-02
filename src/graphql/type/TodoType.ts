import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'
import BaseGraphQLType from "./BaseGraphQLType";



export default new GraphQLObjectType({
  name: 'todo',
  fields: {
    title: { type: GraphQLString },
    url: { type: GraphQLString },
    sort: { type: GraphQLInt },
    status: { type: GraphQLInt },
    add_time: { type: GraphQLString },
    ...BaseGraphQLType
  }
})