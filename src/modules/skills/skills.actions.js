import { FETCH_SKILLS_SUCCESS, FETCH_SKILLS_LOADING } from './skills.constants';

export const getSkills = (value) => {
  return {
    type: FETCH_SKILLS_SUCCESS,
    value
  };
};

export const loading = (value) => {
  return {
    type: FETCH_SKILLS_LOADING,
    value
  };
};
