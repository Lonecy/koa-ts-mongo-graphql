import * as MongoClient from "mongoose";
import { DocumentQuery, Model, Document, Schema } from "mongoose";
import UserService from "../service/UserService";
import TodoService from "../service/TodoService";

const url = 'mongodb://62.234.111.183:27017/mao'

class User extends Document {
  _id: string
  name: string
}

const UserSchema = new Schema({
  name: String,
})

class DbConn {
  conn() {
    MongoClient.createConnection(url,
      {
        useNewUrlParser: true,
        dbName: 'mao',
        user: 'mao',
        pass: '123456'
      }
    ).then(db => {
      console.log('connect')
      UserService.init(db)
      TodoService.init(db)
    }).catch(err => {
      console.error("connect db fail " + err)
      return err
    })
  }
}

export default new DbConn();