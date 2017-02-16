import { call, put } from 'redux-saga/effects'
import { auth, loading } from '../auth/auth.actions';
import { callApi } from '../../service/service';

export function* fetchAuth() {
  yield put(loading(true));
  const { responce, data } = yield call(callApi, { url: '/api/auth' });
  if (responce) {
    yield put(auth(data));
    yield put(loading(false));
  }
}
