import Base from "./Base";

export default interface Todo extends Base {
  listId: string,
  title: string,
  order: number,
  remind: boolean,
  repeat: boolean,
  star: boolean,
  memo: string,
  dueTime: Date,
  finishTime: Date,
}