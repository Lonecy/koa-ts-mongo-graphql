import { GraphQLID, GraphQLInt, GraphQLList, GraphQLString } from "graphql";
import TodoType from "../type/TodoType";
import TodoService from "../../service/TodoService";

export const TodoList = {
  type: new GraphQLList(TodoType),
  // 传进来的参数
  args: {
    _id: {
      name: '_id',
      //type: new GraphQLNonNull(GraphQLID) // 参数不为空
      type: GraphQLID,
    },
    listId: {
      name: 'listId',
      //type: new GraphQLNonNull(GraphQLID) // 参数不为空
      type: GraphQLString,
    },
    title: {
      name: 'title',
      type: GraphQLInt,
    },
    star: {
      name: 'star',
      type: GraphQLInt,
    }
  },
  resolve (root, params, options) {
    console.log("Todos", params)
    return TodoService.list(params)// 查询单条数据
  }
}

export const TodoDel = {
  type: TodoType,
  // 传进来的参数
  args: {
    _id: {
      name: '_id',
      //type: new GraphQLNonNull(GraphQLID) // 参数不为空
      type: GraphQLID,
    },
  },

  resolve (root, params, options) {
    console.log("Todo", params)
    return TodoService.del(params)// 查询单条数据
  }
}

export const TodoAdd = {
  type: TodoType,
  // 传进来的参数
  args: {
    listId: {
      name: 'listId',
      //type: new GraphQLNonNull(GraphQLID) // 参数不为空
      type: GraphQLID,
    },
    title: {
      name: 'title',
      type: GraphQLString,
    },
    order: {
      name: 'order',
      type: GraphQLInt,
    }
  },
  resolve (root, params, options) {
    console.log("Todo", params)
    return TodoService.add(params)
  }
}

export const TodoUpdate = {
  type: TodoType,
  // 传进来的参数
  args: {
    _id: {
      name: '_id',
      type: GraphQLID,
    },
    istId: {
      name: 'listId',
      //type: new GraphQLNonNull(GraphQLID) // 参数不为空
      type: GraphQLID,
    },
    title: {
      name: 'title',
      type: GraphQLString,
    },
    order: {
      name: 'order',
      type: GraphQLInt,
    }
  },
  resolve (root, params, options) {
    console.log("update user", params)
    return TodoService.update(params)
  }
}
