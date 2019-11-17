import { combineReducers } from 'redux';
import userReducers from './UserReducers';
import imageReducers from "./ImageReducers";

export default combineReducers({
  users: userReducers,
  images: imageReducers,
});
