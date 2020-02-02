import Base from "./Base";

export default interface Step extends Base {
  todoId: string,
  title: string,
  order: number,
  finishTime: Date,
}