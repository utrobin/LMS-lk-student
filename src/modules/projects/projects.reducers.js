import { combineReducers } from 'redux';
import { FETCH_PROJECTS_SUCCESS, FETCH_PROJECTS_LOADING, FILTER_PROJECTS_UPDATE_REPLACE,
  FILTER_PROJECTS_GET_LOADING, FILTER_PROJECTS_GET_SUCCESS, FILTER_PROJECTS_UPDATE_INIT,
  FILTER_PROJECTS_UPDATE_LOADING } from './projects.constants';

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

const loadingFilter  = (state = {value: true}, action) => {
  switch (action.type) {
    case FILTER_PROJECTS_GET_LOADING:
      return action;
    default:
      return state
  }
};

const loadingUpdateFilter  = (state = {value: false}, action) => {
  switch (action.type) {
    case FILTER_PROJECTS_UPDATE_LOADING:
      return action;
    default:
      return state
  }
};

const initFilter = {
  author: 'notSelected'
};

const filters = (state = [], action) => {
  switch (action.type) {
    case FILTER_PROJECTS_GET_SUCCESS:
      return action.value;
    default:
      return state
  }
};

const activeFilters = (state = initFilter, action) => {
  switch (action.type) {
    case FILTER_PROJECTS_UPDATE_INIT:
      let newState = {};

      action.value.forEach(el => {
        newState[el.value] = el.default
      });

      return newState;
    case FILTER_PROJECTS_UPDATE_REPLACE:
      return Object.assign({}, state, action.value);
    default:
      return state
  }
};

export const projects = combineReducers({
  data,
  loadingFilter,
  loading,
  filters,
  activeFilters,
  loadingUpdateFilter
});
