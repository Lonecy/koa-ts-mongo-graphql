import { Schema, SchemaDefinition, SchemaOptions } from "mongoose";
import BaseSchemaDef from "./BaseSchemaDef";
import Base from "../../bean/Base";

export default function<T extends Base> (definition?: SchemaDefinition, options?: SchemaOptions) {
  let schema = new Schema<T>(Object.assign(
    definition, BaseSchemaDef
  ), options)

  schema.pre('save', function<T> (next, docs) {
    console.log("pre save", this, this.isNew, this.name)
    if (this.isNew) {
      this.updateTime = this.createTime = Date.now();
    } else {
      this.updateTime = Date.now();
    }
    next();
  })

  return schema
}