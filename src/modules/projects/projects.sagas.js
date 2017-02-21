import { call, put, takeEvery, takeLatest, fork, take, select } from 'redux-saga/effects'
import { getProjects, loading, updateFilterReset, updateFilterReplace, loadingFilter, startSaveFilters,
  filtersInit, loadingUpdateFilter } from '../projects/projects.actions';
import { callApi } from '../../service/service';
import { FETCH_PROJECTS_START, FILTER_PROJECTS_GET_START, FILTER_PROJECTS_UPDATE_START } from './projects.constants';
import { toastr } from 'react-redux-toastr';

export function* fetchProjects(value) {
  if (value !== undefined) {
    yield put(updateFilterReset(value.value));
  }

  const filter = yield select(state => state.projects.activeFilters);

  yield put(loading(true));
  const { responce, data } = yield call(callApi, {
    url: '/api/get/projects' ,
    body: filter
  });
  if (responce) {
    yield put(getProjects(data));
    yield put(loading(false));
  } else {
    toastr.error('Ошибка', 'Попробуйте перезагрузить страницу');
  }
}

export function* getFilters() {
  yield put(loadingFilter(true));

  const { responce, data } = yield call(callApi, {
    url: '/api/projects/filter/get' ,
  });
  if (responce) {
    yield put(startSaveFilters(data));
    yield put(filtersInit(data));
    yield put(loadingFilter(false));
  } else {
    toastr.error('Ошибка', 'Попробуйте перезагрузить страницу');
  }
}


function* fetchUpdateFilter(filter) {
  yield put(loadingUpdateFilter(true));
  yield put(updateFilterReplace(filter.value));

  const filters = yield select(state => state.projects.activeFilters);

  const { responce, data } = yield call(callApi, {
    url: '/api/get/projects',
    body: filters
  });
  if (responce) {
    yield put(getProjects(data));
    yield put(loadingUpdateFilter(false));
  } else {
    toastr.error('Ошибка', 'Попробуйте перезагрузить страницу');
  }
}

//TODO Для подгрузки в поиск
// function* fetchFilter(filters) {
  // yield put(loadingFilter(true));
  // yield put(updateFilterReplace(filters.value));
  // const filter = yield select(state => state.homework.filter);
  //
  //
  // const { responce, data } = yield call(callApi, {
  //   url: '/api/get/homework',
  //   body: filter
  // });
  // if (responce) {
  //   yield put(getHomework(data));
  //   yield put(loadingFilter(false));
  // }
// }

export default function* rootSagaProjects() {
  yield takeEvery(FETCH_PROJECTS_START, fetchProjects);
  yield takeEvery(FILTER_PROJECTS_GET_START, getFilters);
  yield takeEvery(FILTER_PROJECTS_UPDATE_START, fetchUpdateFilter)
}
