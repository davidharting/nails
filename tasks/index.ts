// Ideally this would require in every implementation of a job from Jobs and Mailers
// So that you can just add the file to be good to go
// But we can manually expose for now.
// Manually exposing does give us better guarantees of type safety I would have to imagine

import TestJob from "./jobs/test";

// TODO: environment variable
// TODO: Dev environment variable management

const testJob = new TestJob();
export const addTestJob = testJob.doLater;

function startWorkers() {
  testJob.work();
}

// For now just starting workers in the web server
// This way I can use the next.js build toolchain for everything
// This is not ideal but fine for now as long as jobs stay fast?
startWorkers();
