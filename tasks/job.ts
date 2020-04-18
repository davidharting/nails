import Queue from "bull";

// TODO: I want a setup where the class that inhereits from job
// can define the type of the params

abstract class Job {
  protected queue: Queue.Queue<any>;

  // TODO: Add a default priority and limit to processing 1 at a time

  constructor(name: string) {
    this.queue = new Queue(name, "redis://localhost:6379");

    // I think it is bad to start processing
    // We want to explicitly do this when booting up our worker
    // this.queue.process(this.process);
  }

  doLater = (params: any): Promise<any> => {
    // TODO: Probably want to try-catch inside of this and just return an error?
    // That way the caller can ignore this if they want or handle errors if they want
    return this.queue.add(params);
  };

  work = () => {
    this.queue.process(this.process);
  };

  abstract async process(job: Queue.Job): Promise<any>;
}

export default Job;
