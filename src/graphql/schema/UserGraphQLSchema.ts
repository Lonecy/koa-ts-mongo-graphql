import { GraphQLSchema, GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLList } from "graphql";
import GroupType from "../type/GroupType";
import UserType from "../type/UserType";
import UserService from "../../service/UserService";

export const UserQuery = {
  type: UserType,
  // 传进来的参数
  args: {
    _id: {
      name: '_id',
      //type: new GraphQLNonNull(GraphQLID) // 参数不为空
      type: GraphQLID,
    },
    name: {
      name: 'name',
      //type: new GraphQLNonNull(GraphQLID) // 参数不为空
      type: GraphQLString,
    },
    sex: {
      name: 'sex',
      type: GraphQLInt,
    },
    mobile: {
      name: 'mobile',
      type: GraphQLString,
    }
  },
  resolve (root, params, options) {
    console.log("user", params)
    return UserService.get(params)// 查询单条数据
  }
}

export const UserQueryList = {
  type: new GraphQLList(UserType),
  // 传进来的参数
  args: {
    _id: {
      name: '_id',
      //type: new GraphQLNonNull(GraphQLID) // 参数不为空
      type: GraphQLID,
    },
    name: {
      name: 'name',
      //type: new GraphQLNonNull(GraphQLID) // 参数不为空
      type: GraphQLString,
    },
    sex: {
      name: 'sex',
      type: GraphQLInt,
    },
    mobile: {
      name: 'mobile',
      type: GraphQLString,
    }
  },
  resolve (root, params, options) {
    console.log("users", params)
    return UserService.list(params)// 查询单条数据
  }
}

export const UserDel = {
  type: UserType,
  // 传进来的参数
  args: {
    _id: {
      name: '_id',
      //type: new GraphQLNonNull(GraphQLID) // 参数不为空
      type: GraphQLID,
    },
  },

  resolve (root, params, options) {
    console.log("user", params)
    return UserService.del(params)// 查询单条数据
  }
}

export const UserAdd = {
  type: UserType,
  // 传进来的参数
  args: {

    name: {
      name: 'name',
      //type: new GraphQLNonNull(GraphQLID) // 参数不为空
      type: GraphQLString,
    },
    sex: {
      name: 'sex',
      type: GraphQLInt,
    },
    mobile: {
      name: 'mobile',
      type: GraphQLString,
    }
  },
  resolve (root, params, options) {
    console.log("user", params)
    return UserService.add(params)
  }
}
export const UserUpdate = {
  type: UserType,
  // 传进来的参数
  args: {
    _id: {
      name: '_id',
      type: GraphQLID,
    },
    name: {
      name: 'name',
      //type: new GraphQLNonNull(GraphQLID) // 参数不为空
      type: GraphQLString,
    },
    sex: {
      name: 'sex',
      type: GraphQLInt,
    },
    mobile: {
      name: 'mobile',
      type: GraphQLString,
    }
  },
  resolve (root, params, options) {
    console.log("update user", params)
    return UserService.update(params)
  }
}