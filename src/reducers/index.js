import { combineReducers } from 'redux';
import userReducers from './Users';

export default combineReducers({
  users: userReducers,
});
