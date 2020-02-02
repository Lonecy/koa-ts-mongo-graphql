import { Schema } from "mongoose";
import createSchema from "./createSchema";
import List from "../../bean/List";

export default createSchema<List>({
  todoId: Schema.Types.ObjectId,
  title: Schema.Types.String,// 步骤名
  order: Schema.Types.Number,
  finishTime: Schema.Types.Date, // 完成时间
})
