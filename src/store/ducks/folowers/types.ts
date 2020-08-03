/**
 * Action types
 */
export enum FollowersTypes {
  LOAD_REQUEST = '@followers/LOAD_REQUEST',
  LOAD_SUCCCES = '@followers/LOAD_SUCCCES',
  LOAD_FAILURE = '@followers/LOAD_FAILURE',
}

/**
 * Data types
 */
export interface Followers {
  login: string;
  id: number;
}

/**
 * State type
 */
export interface FollowersState {
  readonly data: Followers[];
  readonly loading: boolean;
  readonly error: boolean;
}
