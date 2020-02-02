import DbConn from "../db/DbConn";
import { Connection, Model } from "mongoose";
import UserSchema from "../db/schema/UserSchema";
import User from "../bean/User";


class UserService {
  UserModel: Model<User>;
  init(conn: Connection) {
    this.UserModel = conn.model('user', UserSchema)
    // let user = new this.UserModel({name: "maomao2"});
    // user.save();
  }

  get(param: User):Promise<User> {
    return this.UserModel.findOne(param)
      .exec()
  }

  list(param: User & {page?: number, pageSize?: number}): Promise<User[]>{
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

    return this.UserModel.find({...rest})
      .skip(start)
      .limit(pageSize)
      .exec()
  }

  add(param: User) {
    console.log("add User", param)
    let newUser = new this.UserModel({...param})
    return newUser.save().then(res=>{
      console.log("save success", res)
      return res
    }).catch(err=>{
      console.error(err)
    })
  }

  del(param: {_id: string}) {
    return this.UserModel.deleteOne(param)
  }

  update(param: User) {
    let {_id, ...rest} = param
    return this.UserModel.update({_id}, rest).exec();
  }
}

export default new UserService();