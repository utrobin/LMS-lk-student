import { call, put } from 'redux-saga/effects'
import { getHomework, loading } from '../homework/homework.actions';
import { callApi } from '../../service/service';

export function* fetchHomework() {
  yield put(loading(true));
  const { responce, data } = yield call(callApi, { url: '/api/get/homework' });
  if (responce) {
    yield put(getHomework(data));
    yield put(loading(false));
  }
}
