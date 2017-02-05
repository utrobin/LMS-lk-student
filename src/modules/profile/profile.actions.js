import { FETCH_PROFILE_SUCCESS } from './profile.constants';
import { FETCH_PROFILE_LOADING } from './profile.constants';

export const getProfile = (value) => {
  return {
    type: FETCH_PROFILE_SUCCESS,
    value
  };
};

export const loading = (value) => {
  return {
    type: FETCH_PROFILE_LOADING,
    value
  };
};
