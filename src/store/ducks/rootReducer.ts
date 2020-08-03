import { combineReducers } from 'redux';

import repositories from './repositories';
import folowers from './folowers';
import users from './users';

export default combineReducers({
  repositories,
  folowers,
  users,
});
