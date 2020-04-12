import { List } from "@prisma/client";

class ListHelper {
  static path(list: List): string {
    console.log("Creating a path for list", list);
    return `/lists/${list.secret}`;
  }
}

export default ListHelper;
