import {
  SEARCH_CHANGE_COMPLETED,
  SEARCH_CHANGE,
  SEARCH_CHANGE_FAILED,
} from './constants';

export function searchChange(string) {
  return {
    type: SEARCH_CHANGE,
    string,
  };
}

export function searchChangeCompleted(obj) {
  return {
    type: SEARCH_CHANGE_COMPLETED,
    obj,
  };
}

export function searchChangeFailed() {
  return {
    type: SEARCH_CHANGE_FAILED,
  };
}
