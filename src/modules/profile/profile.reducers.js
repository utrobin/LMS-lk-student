import { combineReducers } from 'redux';
import { FETCH_PROFILE_SUCCESS } from './profile.constants';
import { FETCH_PROFILE_LOADING} from './profile.constants';

const info = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PROFILE_SUCCESS:
      return action;
    default:
      return state
  }
};

const loading  = (state = {value: true}, action) => {
  switch (action.type) {
    case FETCH_PROFILE_LOADING:
      return action;
    default:
      return state
  }
};

export const profile = combineReducers({
  info,
  loading
});