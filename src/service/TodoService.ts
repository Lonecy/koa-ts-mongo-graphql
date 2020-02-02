import { Connection, Model } from "mongoose";
import TodoSchema from "../db/schema/TodoSchema";
import Todo from "../bean/Todo";

class TodoService {
  TodoModel: Model<Todo>;
  init(conn: Connection) {
    this.TodoModel = conn.model('Todo', TodoSchema)
  }

  get(param: Todo):Promise<Todo> {
    return this.TodoModel.findOne(param)
      .exec()
  }

  list(param: Todo & {page?: number, pageSize?: number}): Promise<Todo[]>{
    let {page, pageSize, ...rest} = param
    let start = 0, limit = 10;
    if (!page) {
      page = 0;
    }
    if (!pageSize) {
      pageSize = 10
    }

    if (pageSize > 50) {
      pageSize = 50;
    }

    start = page * pageSize;

    return this.TodoModel.find({...rest})
      .skip(start)
      .limit(pageSize)
      .exec()
  }

  add(param: Todo) {
    console.log("add Todo", param)
    let newTodo = new this.TodoModel({...param})
    return newTodo.save().then(res=>{
      console.log("save success", res)
      return res
    }).catch(err=>{
      console.error(err)
    })
  }

  del(param: {_id: string}) {
    return this.TodoModel.deleteOne(param)
  }

  update(param: Todo) {
    let {_id, ...rest} = param;
    return this.TodoModel.update({_id: _id}, rest).exec();
  }
}

export default new TodoService();