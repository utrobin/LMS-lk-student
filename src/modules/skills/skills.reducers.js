import { combineReducers } from 'redux';
import { FETCH_SKILLS_SUCCESS, FETCH_SKILLS_LOADING } from './skills.constants';

const data = (state = {}, action) => {
  switch (action.type) {
    case FETCH_SKILLS_SUCCESS:
      return action;
    default:
      return state
  }
};

const loading  = (state = {value: true}, action) => {
  switch (action.type) {
    case FETCH_SKILLS_LOADING:
      return action;
    default:
      return state
  }
};

export const skills = combineReducers({
  data,
  loading
});