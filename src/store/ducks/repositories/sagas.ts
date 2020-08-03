import { call, put } from 'redux-saga/effects';

import { ActionType } from 'typesafe-actions';
import { loadSuccess, loadFailure } from './actions';
import api from '../../../services/api';
import * as actions from './actions';

export function* load(s: ActionType<typeof actions.loadRequest>) {
  try {
    // const test = yield call(api.get, 'users/AndreynRosa');

    const response = yield call(api.get, 'users/AndreynRosa/repos');

    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}
