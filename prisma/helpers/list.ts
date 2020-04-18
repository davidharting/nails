import { List, Task } from "@prisma/client";
import TaskHelper from "./task";

class ListHelper {
  static path(list: List): string {
    return `/lists/${list.secret}`;
  }

  static toProps(
    list: List & {
      tasks: Task[];
    }
  ) {
    return {
      ...list,
      tasks: list.tasks.map((t) => TaskHelper.toProps(t)),
    };
  }
}

export default ListHelper;
