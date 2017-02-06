import { combineReducers } from 'redux';
import { profile } from '../profile/profile.reducers';
import { friends } from '../friends/friends.reducers';
import { projects } from '../projects/projects.reducers';
import { skills } from '../skills/skills.reducers';

const rootReducer = combineReducers({
  profile,
  friends,
  projects,
  skills
});

export default rootReducer;