import { profileApi } from './../../api/api';
import { userAPI } from '../../api/api';
import { ActionsTypes, IUser, ThunkType } from '../../types/types';

const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
const GET_PROFILE_USER = 'GET_PROFILE_USER';
let initialState = {
  users: [] as Array<IUser>,
  profile: null as IUser | null,
};

export type initialStateType = typeof initialState;

const userReducer = (state = initialState, action: ActionsTypes<typeof actions>): any => {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return {
        ...state,
        users: action.users,
        profile: null,
      };
    case GET_PROFILE_USER:
      return {
        ...state,
        profile: action.profile,
      };
    default:
      return state;
  }
};

//Action Creator
export const actions = {
  getsUsers: (users: Array<IUser>) => ({ type: GET_USER_SUCCESS, users } as const),
  getProfile: (profile: IUser) => ({ type: GET_PROFILE_USER, profile } as const),
};

//THUNK
export const getsUsers = (): ThunkType => async dispatch => {
  const users = await userAPI.getUsers();
  dispatch(actions.getsUsers(users));
};

export const deleteUser =
  (id: number): ThunkType =>
  async dispatch => {
    await userAPI.deleteUser(id);
    const users = await userAPI.getUsers();
    dispatch(actions.getsUsers(users));
  };

export const filterUser =
  (name: string): ThunkType =>
  async dispatch => {
    if (name.length) {
      const users = await userAPI.filterUser(name);
      dispatch(actions.getsUsers(users));
    } else {
      const users = await userAPI.getUsers();
      dispatch(actions.getsUsers(users));
    }
  };
export const getProfileUser =
  (id: string): ThunkType =>
  async dispatch => {
    const users = await profileApi.getProfileUser(id);
    dispatch(actions.getProfile(users));
  };
export default userReducer;
