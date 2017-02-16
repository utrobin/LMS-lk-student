import { call, put, select } from 'redux-saga/effects'
import { getHomework, loading } from '../homework/homework.actions';
import { callApi } from '../../service/service';

export function* fetchHomework() {
  const filter = yield select(state => state.homework.filter);
  yield put(loading(true));
  const { responce, data } = yield call(callApi, {
    url: '/api/get/homework',
    body: filter
  });
  if (responce) {
    yield put(getHomework(data));
    yield put(loading(false));
  }
}
