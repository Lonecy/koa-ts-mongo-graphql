import { Schema } from "mongoose";
import createSchema from "./createSchema";
import Todo from "../../bean/Todo";

export default createSchema<Todo>({
      listId: Schema.Types.ObjectId,
      title: Schema.Types.String,
      order: Schema.Types.Number,
      remind: Schema.Types.Boolean,
      repeat: Schema.Types.Boolean,
      star: Schema.Types.Boolean,
      memo: Schema.Types.String,
      dueTime: Schema.Types.Date,// 到期时间
      finishTime: Schema.Types.Date, // 完成时间
})