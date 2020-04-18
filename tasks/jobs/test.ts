import Queue from "bull";
import Job from "~/tasks/job";

class TestJob extends Job {
  constructor() {
    super("test");
  }

  async process(job: Queue.Job<any>): Promise<any> {
    console.log("Working this job", job.id, job.data);
    return Promise.resolve(true);
  }
}

export default TestJob;
