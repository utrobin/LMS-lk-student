import { FETCH_HOMEWORK_SUCCESS, FETCH_HOMEWORK_LOADING } from './homework.constants';

export const getHomework = (value) => {
  return {
    type: FETCH_HOMEWORK_SUCCESS,
    value
  };
};

export const loading = (value) => {
  return {
    type: FETCH_HOMEWORK_LOADING,
    value
  };
};
