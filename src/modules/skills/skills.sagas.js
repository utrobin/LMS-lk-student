import { call, put, takeEvery, select } from 'redux-saga/effects'
import { getSkills, loading, deleteSkillStart, addSkillStart,
  addVoiceStart, deleteVoiceStart } from '../skills/skills.actions';
import { DELETE_SKILLS_FETCH, FETCH_SKILLS_START, ADD_SKILL_FETCH,
  ADD_VOICE_FETCH, DELETE_VOICE_FETCH } from '../skills/skills.constants';
import { callApi } from '../../service/service';
import { toastr } from 'react-redux-toastr';

function* fetchSkills() {
  yield put(loading(true));
  const { responce, data } = yield call(callApi, { url: '/api/skills/get' });
  if (responce) {
    yield put(getSkills(data));
    yield put(loading(false));
  }
}

function* deleteSkill({ value }) {
  yield put(deleteSkillStart(value));

  const { responce, data } = yield call(callApi,
    {
      url: '/api/skill/delete',
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
      url: '/api/skill/add',
      body: { skill: value.skill }
    });

  if (!responce) {
    console.log('успешно');
    toastr.error('Ошибка', 'Навык не добавлен');
  }
}

function* addVoice({ value: data }) {
  const { login, img } = yield select(state => state.auth.data.value);

  const { value, login: who } = data;

  yield put(addVoiceStart({ value, login, img }));

  const { responce } = yield call(callApi,
    {
      url: '/api/skill/voice/add',
      body: { skill: value, who }
    });

  if (!responce) {
    console.log('успешно');
    toastr.error('Ошибка', 'Навык не удалось оценить');
  }
}

function* deleteVoice({ value: data }) {
  const { login } = yield select(state => state.auth.data.value);

  const { value, login: who } = data;

  yield put(deleteVoiceStart({ value, login }));

  const { responce } = yield call(callApi,
    {
      url: '/api/skill/voice/delete',
      body: { skill: value, who }
    });

  if (!responce) {
    console.log('успешно');
    toastr.error('Ошибка', 'Навык не удалось оценить');
  }
}

//TODO
// function* fetchDictionary() {
//   yield put(loading(true));
//   const { responce, data } = yield call(callApi, '/api/get/dictionaryskills');
//   if (responce) {
//     yield put(getSkills(data));
//     yield put(loading(false));
//   }
// }

export default function* rootSagaSkills() {
  yield takeEvery(FETCH_SKILLS_START, fetchSkills);
  yield takeEvery(DELETE_SKILLS_FETCH, deleteSkill);
  yield takeEvery(ADD_SKILL_FETCH, addSkill);
  yield takeEvery(ADD_VOICE_FETCH, addVoice);
  yield takeEvery(DELETE_VOICE_FETCH, deleteVoice)
}
