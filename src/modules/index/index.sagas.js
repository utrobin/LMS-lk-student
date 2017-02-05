import { call, put, takeEvery, takeLatest, fork, take } from 'redux-saga/effects'
import { FETCH_PROFILE_START } from '../profile/profile.constants';
import { FETCH_FRIENDS_START } from '../friends/friends.constants';
import { fetchUser } from '../profile/profile.sagas';
import { fetchFriends } from '../friends/friends.sagas';

export default function* rootSaga() {
  yield takeEvery(FETCH_FRIENDS_START, fetchFriends);
  yield takeEvery(FETCH_PROFILE_START, fetchUser);
}
