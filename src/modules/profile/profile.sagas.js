import { call, put } from 'redux-saga/effects'
import { getProfile, loading } from '../profile/profile.actions';
import { callApi } from '../../service/service';

export function* fetchUser() {
  yield put(loading(true));
  const { responce, data } = yield call(callApi, { url: '/api/get/profile' });
  if (responce) {
    yield put(getProfile(data));
    yield put(loading(false));
  }
}
