import { call, put } from 'redux-saga/effects'
import { getSkills, loading, deleteSkillStart } from '../skills/skills.actions';
import { callApi } from '../../service/service';
import { toastr } from 'react-redux-toastr'

export function* fetchSkills() {
  yield put(loading(true));
  const { responce, data } = yield call(callApi, { url: '/api/get/skills' });
  if (responce) {
    yield put(getSkills(data));
    yield put(loading(false));
  }
}

export function* deleteSkill({ value }) {
  yield put(deleteSkillStart(value));
  console.log(value);

  const { responce, data } = yield call(callApi,
    {
      url: '/api/delete/skills',
      method: 'post',
      body: { id: value }
    });

  if (!responce) {
    console.log('успешно');
    toastr.error('Ошибка', 'Навык не добавлен');
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
