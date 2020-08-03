import { Reducer } from 'redux';
import { FollowersState, FollowersTypes } from './types';

const INITIAL_STATE: FollowersState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<FollowersState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FollowersTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case FollowersTypes.LOAD_SUCCCES:
      return {
        ...state,
        loading: false,
        error: false,

        data: action.payload.data,
      };
    case FollowersTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };
    default:
      return state;
  }
};

export default reducer;
