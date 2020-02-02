import { Document } from "mongoose";

export default interface Base extends Document{
  _id: string,
  del: boolean,
  createTime: Date,
  updateTime: Date,
}