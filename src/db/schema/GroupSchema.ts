import { Schema } from "mongoose";
import BaseSchemaDef from "./BaseSchemaDef";
import createSchema from "./createSchema";
import Group from "../../bean/Group";

export default createSchema<Group>({
  title: Schema.Types.String,
  order: Schema.Types.Number,
})