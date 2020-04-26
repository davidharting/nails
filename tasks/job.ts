import Bull from "bull";
import Redis from "ioredis";

// TODO: I want a setup where the class that inhereits from job
// can define the type of the params

// TODO: I could make jobs be handled syncrhonously in dev
// by totally bypassing the queue
// When you `doLater()`, if in sync mode, then call `this.process` directly

// Share a single redis client among all queues
// https://github.com/OptimalBits/bull/blob/develop/PATTERNS.md#reusing-redis-connections
const { REDIS_URL } = process.env;
const client = new Redis(REDIS_URL);
const subscriber = new Redis(REDIS_URL);
const opts: Bull.QueueOptions = {
  createClient: function (type) {
    switch (type) {
      case "client":
        return client;
      case "subscriber":
        return subscriber;
      default:
        return new Redis(REDIS_URL);
    }
  },
};

// I could add a second paramater for the return type of processing
abstract class Job<T> {
  protected queue: Bull.Queue<T>;

  // TODO: Add a default priority and limit to processing 1 at a time
  // but allow subclasses to override

  constructor(name: string) {
    try {
      this.queue = new Bull(name, "redis://localhost:6379", opts);
    } catch (err) {
      console.log("Unable to establish connection to redis for queue ", name);
      console.error(err);
    }

    // I think it is bad to start processing
    // We want to explicitly do this when booting up our worker
    // this.queue.process(this.process);
  }

  /**
   * Adds an item to the queue
   */
  doLater = (params: T): Promise<Job<T>> => {
    // TODO: Probably want to try-catch inside of this and just return an error?
    // That way the caller can ignore this if they want or handle errors if they want
    return this.queue.add(params).catch((err) => {
      console.log("Unable to add item to queue", params);
      console.error(err);
      return null;
    });
  };

  /**
   * Starts the worker processing to consume items from the queue
   */
  work = () => {
    try {
      this.queue.process(this.process);
    } catch (err) {
      console.log("Unable to start working");
      console.error(err);
    }
  };

  /**
   * Specific jobs must implement this function in order to work a job.
   * This is the actual meat of the task - what does the worker do?
   */
  abstract async process(job: Bull.Job<T>): Promise<Bull.Job<T>>;
}

export default Job;
