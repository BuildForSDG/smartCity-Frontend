import { combineReducers } from 'redux';
import user from './user.reducer';

const userReducer = combineReducers({
  user
});

export default userReducer;
