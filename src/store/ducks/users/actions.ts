import { action } from 'typesafe-actions';
import { Users, UsersTypes } from './types';

export const userLoadRequest = (name: string) => {
  return action(UsersTypes.LOAD_REQUEST, { name });
};

export const userLoadSuccess = (data: Users[]) => {
  return action(UsersTypes.LOAD_SUCCCES, { data });
};

export const userLoadFailure = () => action(UsersTypes.LOAD_FAILURE);
