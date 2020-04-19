import Queue from "bull";
import Job from "~/tasks/job";

interface TestJobParams {
  greeting: string;
}

class TestJob extends Job<TestJobParams> {
  constructor() {
    super("test");
  }

  process(job: Queue.Job<TestJobParams>): Promise<any> {
    console.log(job.data.greeting);
    return Promise.resolve(true);
  }
}

export default TestJob;
