import { combineReducers } from 'redux';
import { FETCH_FRIENDS_SUCCESS, FETCH_FRIENDS_LOADING } from './friends.constants';

const data = (state = {}, action) => {
  switch (action.type) {
    case FETCH_FRIENDS_SUCCESS:
      return action;
    default:
      return state
  }
};

const loading  = (state = {value: true}, action) => {
  switch (action.type) {
    case FETCH_FRIENDS_LOADING:
      return action;
    default:
      return state
  }
};

export const friends = combineReducers({
  data,
  loading
});
