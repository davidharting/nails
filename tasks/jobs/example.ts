import Queue from "bull";
import Job from "~/tasks/job";

interface TestJobParams {
  greeting: string;
}

class ExampleJob extends Job<TestJobParams> {
  constructor() {
    super("test");
  }

  process(job: Queue.Job<TestJobParams>): Promise<boolean> {
    console.log("Processing job", job.id);
    console.log(job.data.greeting);
    return Promise.resolve(true);
  }
}

export default ExampleJob;
