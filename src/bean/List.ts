import Base from "./Base";

export default interface List extends Base {
  title: string,
  groupId: string,
  order: number,
  color: string,
}