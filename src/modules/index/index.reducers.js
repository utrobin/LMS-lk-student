import { combineReducers } from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr';
import { profile } from '../profile/profile.reducers';
import { friends } from '../friends/friends.reducers';
import { projects } from '../projects/projects.reducers';
import { skills } from '../skills/skills.reducers';
import { homework } from '../homework/homework.reducers';
import { auth } from '../auth/auth.reducers';

const rootReducer = combineReducers({
  profile,
  friends,
  projects,
  skills,
  homework,
  auth,
  toastr: toastrReducer
});

export default rootReducer;