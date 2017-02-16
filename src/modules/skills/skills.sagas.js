import { call, put, takeEvery } from 'redux-saga/effects'
import { getSkills, loading, deleteSkillStart, addSkillStart } from '../skills/skills.actions';
import { DELETE_SKILLS_FETCH, FETCH_SKILLS_START, ADD_SKILL_FETCH } from '../skills/skills.constants';
import { callApi } from '../../service/service';
import { toastr } from 'react-redux-toastr'

function* fetchSkills() {
  yield put(loading(true));
  const { responce, data } = yield call(callApi, { url: '/api/get/skills' });
  if (responce) {
    yield put(getSkills(data));
    yield put(loading(false));
  }
}

function* deleteSkill({ value }) {
  yield put(deleteSkillStart(value));

  const { responce, data } = yield call(callApi,
    {
      url: '/api/delete/skill',
      method: 'post',
      body: { value }
    });

  if (!responce) {
    console.log('успешно');
    toastr.error('Ошибка', 'Навык не был удаленн');
  }
}

function* addSkill({ value }) {
  yield put(addSkillStart(value));

  const { responce, data } = yield call(callApi,
    {
      url: '/api/add/skill',
      body: { skill: value.skill }
    });

  if (!responce) {
    console.log('успешно');
    toastr.error('Ошибка', 'Навык не добавлен');
  }
}

function* fetchDictionary() {
  yield put(loading(true));
  const { responce, data } = yield call(callApi, '/api/get/dictionaryskills');
  if (responce) {
    yield put(getSkills(data));
    yield put(loading(false));
  }
}

export default function* rootSagaSkills() {
  yield takeEvery(FETCH_SKILLS_START, fetchSkills);
  yield takeEvery(DELETE_SKILLS_FETCH, deleteSkill);
  yield takeEvery(ADD_SKILL_FETCH, addSkill)
}
