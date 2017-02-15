import { call, put, takeEvery, takeLatest, fork, take } from 'redux-saga/effects'
import { FETCH_PROFILE_START } from '../profile/profile.constants';
import { FETCH_FRIENDS_START } from '../friends/friends.constants';
import { FETCH_PROJECTS_START } from '../projects/projects.constants';
import { FETCH_SKILLS_START } from '../skills/skills.constants';
import { FETCH_HOMEWORK_START } from '../homework/homework.constants';
import { DELETE_SKILLS_FETCH } from '../skills/skills.constants';
import { fetchUser } from '../profile/profile.sagas';
import { fetchFriends } from '../friends/friends.sagas';
import { fetchProjects } from '../projects/projects.sagas';
import { fetchSkills, deleteSkill } from  '../skills/skills.sagas';
import { fetchHomework } from  '../homework/homework.sagas';

export default function* rootSaga() {
  yield takeEvery(FETCH_FRIENDS_START, fetchFriends);
  yield takeEvery(FETCH_PROFILE_START, fetchUser);
  yield takeEvery(FETCH_PROJECTS_START, fetchProjects);
  yield takeEvery(FETCH_SKILLS_START, fetchSkills);
  yield takeEvery(FETCH_HOMEWORK_START, fetchHomework);
  yield takeEvery(DELETE_SKILLS_FETCH, deleteSkill);
}
