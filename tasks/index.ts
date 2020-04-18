// Ideally this would require in every implementation of a job from Jobs and Mailers
// So that you can just add the file to be good to go
// But we can manually expose for now.
// Manually exposing does give us better guarantees of type safety I would have to imagine

import Queue from "bull";

import TestJob from "./jobs/test";

// TODO: environment variable
// TODO: Dev environment variable management

const testJob = new TestJob();
export const addTestJob = testJob.doLater;

// Because are requiring in addTestJob somewhere else
// we will start working immediately
// This means we will do work on the web server itself
// This is not ideal but fine for now
testJob.work();
