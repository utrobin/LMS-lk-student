import { FETCH_FRIENDS_SUCCESS, FETCH_FRIENDS_LOADING } from './friends.constants';

export const getFriends = (value) => {
  return {
    type: FETCH_FRIENDS_SUCCESS,
    value
  };
};

export const loading = (value) => {
  return {
    type: FETCH_FRIENDS_LOADING,
    value
  };
};
