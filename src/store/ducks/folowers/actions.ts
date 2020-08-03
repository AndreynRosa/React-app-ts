import { action } from 'typesafe-actions';
import { FollowersTypes, Followers } from './types';

export const folowersLoadRequest = (name: string) => {
  return action(FollowersTypes.LOAD_REQUEST, { name });
};

export const folowersLoadSuccess = (data: Followers[]) =>
  action(FollowersTypes.LOAD_SUCCCES, { data });

export const folowersLoadFailure = () => action(FollowersTypes.LOAD_FAILURE);
