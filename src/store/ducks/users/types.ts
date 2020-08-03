/**
 * Action types
 */
export enum UsersTypes {
  LOAD_REQUEST = '@users/LOAD_REQUEST',
  LOAD_SUCCCES = '@users/LOAD_SUCCCES',
  LOAD_FAILURE = '@users/LOAD_FAILURE',
}

/**
 * Data types
 */
export interface Users {
  avatar: string;
  name: string;
  organizations: string[];
  email: string;
  following: number;
  public_gists: number;
}
/**
 * State type
 */
export interface UsersState {
  readonly data: Users[];
  readonly loading: boolean;
  readonly error: boolean;
}
