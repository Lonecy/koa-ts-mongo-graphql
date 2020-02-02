import { Schema } from "mongoose";
import createSchema from "./createSchema";
import User from "../../bean/User";

export default createSchema<User>({
  name: Schema.Types.String,
  sex: Schema.Types.Number, // 1 男 0 女
  mobile: Schema.Types.String,
})