import { call, put } from 'redux-saga/effects';

import { ActionType } from 'typesafe-actions';
import { repositoriesLoadSuccess, repositoriesLoadFailure } from './actions';
import api from '../../../services/api';
import * as actions from './actions';

export function* loadRepositories(
  action: ActionType<typeof actions.repositoriesLoadRequest>,
) {
  try {
    const url = `users/${action.payload.name}/repos`;
    console.log('url', url);
    const response = yield call(api.get, url);

    yield put(repositoriesLoadSuccess(response.data));
  } catch (err) {
    yield put(repositoriesLoadFailure());
  }
}
