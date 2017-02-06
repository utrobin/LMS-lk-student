import { combineReducers } from 'redux';
import { profile } from '../profile/profile.reducers';
import { friends } from '../friends/friends.reducers';
import { projects } from '../projects/projects.reducers';

const rootReducer = combineReducers({
  profile,
  friends,
  projects
});

export default rootReducer;