import { call, put } from 'redux-saga/effects';

import { ActionType } from 'typesafe-actions';
import { folowersLoadSuccess, folowersLoadFailure } from './actions';
import api from '../../../services/api';
import * as actions from './actions';

export function* loadFlowers(
  action: ActionType<typeof actions.folowersLoadRequest>,
) {
  try {
    const url = `users/${action.payload.name}/followers`;
    const response = yield call(api.get, url);
    yield put(folowersLoadSuccess(response.data));
  } catch (err) {
    yield put(folowersLoadFailure());
  }
}
