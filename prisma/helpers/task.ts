import { Task } from "@prisma/client";

class TaskHelper {
  // Probably rename "serializable"?
  // I would like to solve this at a more generic level
  // Some kind of mapper that can take any prisma object and create a prop-friendly version
  // through more generic introspection rather than field-for-field mapping
  static toProps(task: Task) {
    return {
      ...task,
      completedAt: task.completedAt ? task.completedAt.toISOString() : null,
    };
  }
}

export default TaskHelper;
