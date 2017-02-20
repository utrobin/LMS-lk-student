import { FETCH_PROJECTS_SUCCESS, FETCH_PROJECTS_LOADING, FETCH_PROJECTS_START,
  FILTER_PROJECTS_UPDATE_REPLACE, FILTER_PROJECTS_GET_LOADING, FILTER_PROJECTS_GET_START,
  FILTER_PROJECTS_GET_SUCCESS, FILTER_PROJECTS_UPDATE_INIT, FILTER_PROJECTS_UPDATE_LOADING,
  FILTER_PROJECTS_UPDATE_START } from './projects.constants';

export const getProjects = value => {
  return {
    type: FETCH_PROJECTS_SUCCESS,
    value
  };
};

export const startGetProjects = value => {
  return {
    type: FETCH_PROJECTS_START,
    value
  };
};

export const updateFilterReplace = value => {
  return {
    type: FILTER_PROJECTS_UPDATE_REPLACE,
    value
  };
};

export const loading = value => {
  return {
    type: FETCH_PROJECTS_LOADING,
    value
  };
};

export const loadingFilter = value => {
  return {
    type: FILTER_PROJECTS_GET_LOADING,
    value
  };
};

export const loadingUpdateFilter = value => {
  return {
    type: FILTER_PROJECTS_UPDATE_LOADING,
    value
  };
};

export const startGetFilter = value => {
  return {
    type: FILTER_PROJECTS_GET_START,
    value
  };
};

export const startSaveFilters = value => {
  return {
    type: FILTER_PROJECTS_GET_SUCCESS,
    value
  };
};

export const startStartUdpateFilter = value => {
  return {
    type: FILTER_PROJECTS_UPDATE_START,
    value
  };
};

export const filtersInit = value => {
  return {
    type: FILTER_PROJECTS_UPDATE_INIT,
    value
  };
};

