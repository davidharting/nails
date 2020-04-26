// Ideally this would require in every implementation of a job from Jobs and Mailers
// So that you can just add the file to be good to go
// But we can manually expose for now.
// Manually exposing does give us better guarantees of type safety I would have to imagine
// So maybe this is better long-term as well

import ExampleJob from "./jobs/example";

const exampleJob = new ExampleJob();
export const addExampleJob = exampleJob.doLater;

export function startWorkers() {
  exampleJob.work();
}
