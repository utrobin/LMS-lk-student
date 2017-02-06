import { call, put } from 'redux-saga/effects'
import { getSkills, loading } from '../skills/skills.actions';
import { callApi } from '../../service/service';

export function* fetchSkills() {
  yield put(loading(true));
  const { responce, data } = yield call(callApi, '/api/get/skills');
  if (responce) {
    yield put(getSkills(data));
    yield put(loading(false));
  }
}

export function* fetchDictionary() {
  yield put(loading(true));
  const { responce, data } = yield call(callApi, '/api/get/dictionaryskills');
  if (responce) {
    yield put(getSkills(data));
    yield put(loading(false));
  }
}
