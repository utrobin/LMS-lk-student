import { FETCH_HOMEWORK_SUCCESS, FETCH_HOMEWORK_LOADING, CHANGE_FILTER_START,
  CHANGE_FILTER_REPLACE, CHANGE_FILTER_LOADING } from './homework.constants';

export const getHomework = value => {
  return {
    type: FETCH_HOMEWORK_SUCCESS,
    value
  };
};

export const updateFilterStart = value => {
  return {
    type: CHANGE_FILTER_START,
    value
  };
};

export const updateFilterReplace = value => {
  return {
    type: CHANGE_FILTER_REPLACE,
    value
  };
};

export const loading = value => {
  return {
    type: FETCH_HOMEWORK_LOADING,
    value
  };
};

export const loadingFilter = value => {
  return {
    type: CHANGE_FILTER_LOADING,
    value
  };
};
