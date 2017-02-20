import { FETCH_PROFILE_SUCCESS, FETCH_PROFILE_START, FETCH_PROFILE_LOADING } from './profile.constants';

export const getProfile = value => {
  return {
    type: FETCH_PROFILE_SUCCESS,
    value
  };
};

export const startGetProfile = value => {
  return {
    type: FETCH_PROFILE_START,
    value
  };
};

export const loading = value => {
  return {
    type: FETCH_PROFILE_LOADING,
    value
  };
};
