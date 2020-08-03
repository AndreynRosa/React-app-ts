import { action } from 'typesafe-actions';
import { RepositoriesTypes, Repository } from './types';

export const repositoriesLoadRequest = (name: string) =>
  action(RepositoriesTypes.LOAD_REQUEST, { name });

export const repositoriesLoadSuccess = (data: Repository[]) =>
  action(RepositoriesTypes.LOAD_SUCCCES, { data });

export const repositoriesLoadFailure = () =>
  action(RepositoriesTypes.LOAD_FAILURE);
