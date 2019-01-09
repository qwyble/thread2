import { GET_THREADS, GET_THREADS_COMPLETED } from './constants';

export function getThreads() {
  return {
    type: GET_THREADS,
  };
}

export function getThreadsCompleted(threads) {
  return {
    type: GET_THREADS_COMPLETED,
    threads,
  };
}
