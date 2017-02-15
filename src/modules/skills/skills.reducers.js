import { combineReducers } from 'redux';
import { FETCH_SKILLS_SUCCESS, FETCH_SKILLS_LOADING, DELETE_SKILLS_START } from './skills.constants';

const data = (state = {}, action) => {
  switch (action.type) {
    case DELETE_SKILLS_START:
      const id = action.value;

      const newSkills = state.value.data.filter(el => el.id !== id);
      const newState = Object.assign({}, state);
      newState.value.data = newSkills;

      return newState;
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
