import { combineReducers } from 'redux';
import { FETCH_AUTH_SUCCESS, FETCH_AUTH_LOADING } from './auth.constants';

const data = (state = {}, action) => {
  switch (action.type) {
    case FETCH_AUTH_SUCCESS:
      return action;
    default:
      return state
  }
};

const loading  = (state = {value: true}, action) => {
  switch (action.type) {
    case FETCH_AUTH_LOADING:
      return action;
    default:
      return state
  }
};

export const auth = combineReducers({
  data,
  loading
});
