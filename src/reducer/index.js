import { combineReducers } from 'redux';
import userReducers from './UserReducers';

export default combineReducers({
  users: userReducers,
});
