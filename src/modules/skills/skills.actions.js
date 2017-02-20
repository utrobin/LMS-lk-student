import { FETCH_SKILLS_SUCCESS, FETCH_SKILLS_LOADING, DELETE_SKILLS_START,
  DELETE_SKILLS_FETCH, ADD_SKILL_START, ADD_SKILL_FETCH, ADD_VOICE_FETCH, ADD_VOICE_START,
  DELETE_VOICE_START, DELETE_VOICE_FETCH } from './skills.constants';

export const getSkills = value => {
  return {
    type: FETCH_SKILLS_SUCCESS,
    value
  };
};

export const deleteSkillStart = value => {
  return {
    type: DELETE_SKILLS_START,
    value
  };
};

export const addSkillStart = value => {
  return {
    type: ADD_SKILL_START,
    value
  };
};

export const deleteSkillFetch = value => {
  return {
    type: DELETE_SKILLS_FETCH,
    value
  };
};

export const addSkillFetch = value => {
  return {
    type: ADD_SKILL_FETCH,
    value
  };
};

export const addVoiceFetch = value => {
  return {
    type: ADD_VOICE_FETCH,
    value
  };
};

export const addVoiceStart = value => {
  return {
    type: ADD_VOICE_START,
    value
  };
};

export const deleteVoiceFetch = value => {
  return {
    type: DELETE_VOICE_FETCH,
    value
  };
};

export const deleteVoiceStart = value => {
  return {
    type: DELETE_VOICE_START,
    value
  };
};

export const loading = value => {
  return {
    type: FETCH_SKILLS_LOADING,
    value
  };
};
