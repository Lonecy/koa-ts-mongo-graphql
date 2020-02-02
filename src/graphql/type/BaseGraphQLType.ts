import { GraphQLInt, GraphQLString, GraphQLID, GraphQLBoolean } from "graphql";

let BaseGraphQLType = {
  _id: { type: GraphQLID },
  del: { type: GraphQLBoolean },
  createTime: { type: GraphQLString },
  updateTime: { type: GraphQLString },
}

export default BaseGraphQLType;
