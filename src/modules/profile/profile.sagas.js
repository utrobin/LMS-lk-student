import { call, put } from 'redux-saga/effects'
import { getProfile, loading } from '../profile/profile.actions';
import { callApi } from '../../service/service';

export function* fetchUser({ value }) {
  yield put(loading(true));
  const { responce, data } = yield call(callApi, {
    url: '/api/get/profile',
    body: { value }
  });
  if (responce) {
    yield put(getProfile(data));
    yield put(loading(false));
  }
}
