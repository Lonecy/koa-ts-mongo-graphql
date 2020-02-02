import { Schema } from "mongoose";
import createSchema from "./createSchema";
import List from "../../bean/List";

export default createSchema<List>({
  title: Schema.Types.String,
  groupId: Schema.Types.ObjectId, // 1 男 0
  order: Schema.Types.Number,
  color: Schema.Types.String,
})