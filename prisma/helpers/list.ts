import { List } from "@prisma/client";

class ListHelper {
  static path(list: List): string {
    return `/lists/${list.secret}`;
  }
}

export default ListHelper;
