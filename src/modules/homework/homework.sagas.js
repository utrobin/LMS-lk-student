import { call, put, takeEvery, takeLatest, fork, take, select } from 'redux-saga/effects'
import { FETCH_HOMEWORK_START, CHANGE_FILTER_START } from './homework.constants';
import { getHomework, loading, updateFilterReplace, loadingFilter } from '../homework/homework.actions';
import { callApi } from '../../service/service';

function* fetchHomework() {
  const filter = yield select(state => state.homework.filter);
  yield put(loading(true));
  const { responce, data } = yield call(callApi, {
    url: '/api/homework/get',
    body: filter
  });
  if (responce) {
    yield put(getHomework(data));
    yield put(loading(false));
  }
}

function* fetchFilter(filters) {
  yield put(loadingFilter(true));
  yield put(updateFilterReplace(filters.value));
  const filter = yield select(state => state.homework.filter);


  const { responce, data } = yield call(callApi, {
    url: '/api/homework/get',
    body: filter
  });
  if (responce) {
    yield put(getHomework(data));
    yield put(loadingFilter(false));
  }
}

export default function* rootSagaHomeworks() {
  yield takeEvery(FETCH_HOMEWORK_START, fetchHomework);
  yield takeEvery(CHANGE_FILTER_START, fetchFilter);
}
