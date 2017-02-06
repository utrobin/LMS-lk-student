import { FETCH_PROJECTS_SUCCESS, FETCH_PROJECTS_LOADING } from './projects.constants';

export const getProjects = (value) => {
  return {
    type: FETCH_PROJECTS_SUCCESS,
    value
  };
};

export const loading = (value) => {
  return {
    type: FETCH_PROJECTS_LOADING,
    value
  };
};
