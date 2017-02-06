import { combineReducers } from 'redux';
import { FETCH_PROJECTS_SUCCESS, FETCH_PROJECTS_LOADING } from './projects.constants';

const data = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PROJECTS_SUCCESS:
      return action;
    default:
      return state
  }
};

const loading  = (state = {value: true}, action) => {
  switch (action.type) {
    case FETCH_PROJECTS_LOADING:
      return action;
    default:
      return state
  }
};

export const projects = combineReducers({
  data,
  loading
});
