import { call, put } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';

import { userLoadSuccess, userLoadFailure } from './actions';
import api from '../../../services/api';
import * as actions from './actions';
import { Users } from './types';

interface Organization {
  url: string;
}
async function getOrganizationNames(organizationsURL: string) {
  const response = await api.get(organizationsURL);
  return response.data?.name;
}
export function* loadUser(action: ActionType<typeof actions.userLoadRequest>) {
  try {
    const response = yield call(api.get, `users/${action.payload.name}`);
    const organizationsReponse = yield call(
      api.get,
      `users/${action.payload.name}/orgs`,
    );
    const organizations = organizationsReponse.data.map(
      (organization: Organization) => {
        return organization.url;
      },
    );
    const organization01 = yield call(getOrganizationNames, organizations[0]);
    const organization02 = yield call(getOrganizationNames, organizations[1]);

    const { name, following, email, public_gists, avatar_url } = response.data;
    const buildRep: Users[] = [
      {
        name,
        avatar: avatar_url,
        following,
        email,
        organizations: [organization01, organization02],
        public_gists,
      },
    ];
    yield put(userLoadSuccess(buildRep));
  } catch (err) {
    yield put(userLoadFailure());
  }
}
