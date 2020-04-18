import { Task } from "@prisma/client";

class TaskHelper {
  // Probably rename "serializable"?
  static toProps(task: Task) {
    return {
      ...task,
      completedAt: task.completedAt ? task.completedAt.toISOString() : null,
    };
  }
}

export default TaskHelper;
