import { combineReducers } from 'redux';
import { auth } from '../auth/auth.reducers';

const rootReducer = combineReducers({
  auth,
});

export default rootReducer;