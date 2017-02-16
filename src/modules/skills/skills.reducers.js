import { combineReducers } from 'redux';
import { FETCH_SKILLS_SUCCESS, FETCH_SKILLS_LOADING, DELETE_SKILLS_START, ADD_SKILL_START } from './skills.constants';

const data = (state = {}, action) => {
  switch (action.type) {
    case DELETE_SKILLS_START:
      const value = action.value;

      const newSkills = state.value.data.filter(el => el.value !== value);
      const newState = Object.assign({}, state);
      newState.value.data = newSkills;

      return newState;
    case ADD_SKILL_START:
      const { skill: valueS, count = 0, peoples = [] } = action.value;

      const skill = {
        value: valueS,
        count,
        id: null,
        peoples
      };

      const newStateADD = Object.assign({}, state);
      newStateADD.value.data.push(skill);

      return newStateADD;
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
