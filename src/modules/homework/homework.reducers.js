import { combineReducers } from 'redux';
import { FETCH_HOMEWORK_SUCCESS, FETCH_HOMEWORK_LOADING, CHANGE_FILTER_UPDATE } from './homework.constants';

const data = (state = {}, action) => {
  switch (action.type) {
    case FETCH_HOMEWORK_SUCCESS:
      return action;
    default:
      return state
  }
};

const filter = (state = { discipline: 'all', status: 'uncompleted' }, action) => {
  switch (action.type) {
    case CHANGE_FILTER_UPDATE:
      return action;
    default:
      return state
  }
};

const loading  = (state = {value: true}, action) => {
  switch (action.type) {
    case FETCH_HOMEWORK_LOADING:
      return action;
    default:
      return state
  }
};

export const homework = combineReducers({
  data,
  loading,
  filter
});
