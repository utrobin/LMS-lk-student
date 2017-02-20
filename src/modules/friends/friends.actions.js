import { FETCH_FRIENDS_SUCCESS, FETCH_FRIENDS_LOADING, FETCH_FRIENDS_START } from './friends.constants';

export const getFriends = value => {
  return {
    type: FETCH_FRIENDS_SUCCESS,
    value
  };
};

export const startGetFriends = value => {
  return {
    type: FETCH_FRIENDS_START,
    value
  };
};

export const loading = value => {
  return {
    type: FETCH_FRIENDS_LOADING,
    value
  };
};
