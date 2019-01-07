import {
  GET_USER,
  GET_USER_COMPLETED,
  GET_USER_FAILED,
  UPLOAD_IMAGE,
  UPLOAD_IMAGE_COMPLETED,
  UPLOAD_IMAGE_FAILED,
  EDIT_USER,
  EDIT_USER_COMPLETED,
  EDIT_USER_FAILED,
} from './constants';

export function getUser() {
  return {
    type: GET_USER,
  };
}

export function getUserCompleted(user) {
  return {
    type: GET_USER_COMPLETED,
    user,
  };
}

export function getUserFailed() {
  return {
    type: GET_USER_FAILED,
  };
}

export function editUser(email, username) {
  return {
    type: EDIT_USER,
    email,
    username,
  };
}

export function editUserCompleted(email, username) {
  return {
    type: EDIT_USER_COMPLETED,
    email,
    username,
  };
}

export function editUserFailed() {
  return {
    type: EDIT_USER_FAILED,
  };
}

export function uploadImage(imageFile, imageUrl) {
  return {
    type: UPLOAD_IMAGE,
    imageFile,
    imageUrl,
  };
}

export function uploadImageCompleted(imageUrl) {
  return {
    type: UPLOAD_IMAGE_COMPLETED,
    imageUrl,
  };
}

export function uploadImageFailed() {
  return {
    type: UPLOAD_IMAGE_FAILED,
  };
}
