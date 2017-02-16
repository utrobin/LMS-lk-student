import { FETCH_AUTH_SUCCESS, FETCH_AUTH_LOADING } from './auth.constants';

export const auth = (value) => {
  return {
    type: FETCH_AUTH_SUCCESS,
    value
  };
};

export const loading = (value) => {
  return {
    type: FETCH_AUTH_LOADING,
    value
  };
};
