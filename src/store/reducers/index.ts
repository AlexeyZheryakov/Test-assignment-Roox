import { combineReducers } from 'redux';
import userReducer from './user/reducer';

const rootReducer = combineReducers({
  usersStore: userReducer,
});

export default rootReducer;
