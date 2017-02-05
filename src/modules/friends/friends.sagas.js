import { call, put } from 'redux-saga/effects'
import { getFriends, loading } from '../friends/friends.actions';
import { callApi } from '../../service/service';

export function* fetchFriends() {
  yield put(loading(true));
  const { responce, data } = yield call(callApi, '/api/get/friends');
  if (responce) {
    yield put(getFriends(data));
    yield put(loading(false));
  }
}
