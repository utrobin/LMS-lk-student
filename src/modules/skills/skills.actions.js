import { FETCH_SKILLS_SUCCESS, FETCH_SKILLS_LOADING, DELETE_SKILLS_START, DELETE_SKILLS_FETCH } from './skills.constants';

export const getSkills = (value) => {
  return {
    type: FETCH_SKILLS_SUCCESS,
    value
  };
};

export const deleteSkillStart = (value) => {
  return {
    type: DELETE_SKILLS_START,
    value
  };
};

export const deleteSkillFetch = (value) => {
  return {
    type: DELETE_SKILLS_FETCH,
    value
  };
};

export const loading = (value) => {
  return {
    type: FETCH_SKILLS_LOADING,
    value
  };
};
