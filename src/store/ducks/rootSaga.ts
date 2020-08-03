import { all, takeLatest, takeEvery } from 'redux-saga/effects';

import { RepositoriesTypes } from './repositories/types';
import { loadRepositories } from './repositories/sagas';
import { FollowersTypes } from './folowers/types';
import { loadFlowers } from './folowers/sagas';
import { UsersTypes } from './users/types';
import { loadUser } from './users/sagas';

export default function* rootSaga() {
  return yield all([
    takeEvery(RepositoriesTypes.LOAD_REQUEST, loadRepositories),
    takeEvery(FollowersTypes.LOAD_REQUEST, loadFlowers),
    takeEvery(UsersTypes.LOAD_REQUEST, loadUser),
  ]);
}
