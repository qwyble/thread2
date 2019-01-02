import { MAKE_PUBLIC, MAKE_PUBLIC_COMPLETE } from './constants';

export function makePublic() {
  return {
    type: MAKE_PUBLIC,
  };
}

export function makePublicComplete() {
  return {
    type: MAKE_PUBLIC_COMPLETE,
  };
}
