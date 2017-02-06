import { call, put } from 'redux-saga/effects'
import { getProjects, loading } from '../projects/projects.actions';
import { callApi } from '../../service/service';

export function* fetchProjects() {
  yield put(loading(true));
  const { responce, data } = yield call(callApi, '/api/get/projects');
  if (responce) {
    yield put(getProjects(data));
    yield put(loading(false));
  }
}
