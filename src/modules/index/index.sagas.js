import { call, put, takeEvery, takeLatest, fork } from 'redux-saga/effects'
import { actionAuth } from '../auth/auth.actions';

export function isAuth() {
  return new Promise( (resolve, reject) =>
    setTimeout(() => {
      resolve(true)
    }, 1000)
  )
}

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser() {
  const auth = yield call(isAuth);
  yield put(actionAuth(auth));
}

export default function* rootSaga() {
  yield fork(fetchUser);
}
