import { combineReducers } from 'redux';
import { profile } from '../profile/profile.reducers';
import { friends } from '../friends/friends.reducers';

const rootReducer = combineReducers({
  profile,
  friends
});

export default rootReducer;