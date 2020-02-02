import { Schema } from "mongoose";


const BaseSchemaDef = {
  //_id: Schema.Types.ObjectId,
  del: Schema.Types.Boolean,
  createTime: Schema.Types.Date,
  updateTime: Schema.Types.Date,
}
export default BaseSchemaDef