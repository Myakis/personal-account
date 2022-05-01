import { profileApi } from './../../api/api';
import { userAPI } from '../../api/api';
import { ActionsTypes, BaseThunkType, INewUser, IUser } from '../../types/types';

let initialState = {
  users: [] as Array<IUser>,
  profile: null as IUser | null,
  isLoad: false,
};

export type initialStateType = typeof initialState;
export type ThunkType = BaseThunkType<ActionsTypes<typeof actions>>;

const userReducer = (
  state = initialState,
  action: ActionsTypes<typeof actions>,
): initialStateType => {
  switch (action.type) {
    case 'GET_USER_SUCCESS':
      return {
        ...state,
        users: action.users,
        profile: null,
        isLoad: true,
      };
    case 'GET_PROFILE_USER':
      return {
        ...state,
        profile: action.profile,
      };
    case 'TOGGLE_LOAD': {
      return {
        ...state,
        isLoad: action.load,
      };
    }
    default:
      return state;
  }
};

//Action Creator
export const actions = {
  getsUsers: (users: Array<IUser>) => ({ type: 'GET_USER_SUCCESS', users } as const),
  getProfile: (profile: IUser) => ({ type: 'GET_PROFILE_USER', profile } as const),
  toggleLoad: (load: boolean) => ({ type: 'TOGGLE_LOAD', load } as const),
};

//THUNK
export const getsUsers = (): ThunkType => async dispatch => {
  dispatch(actions.toggleLoad(false));
  try {
    const users = await userAPI.getUsers();
    dispatch(actions.getsUsers(users));
    dispatch(actions.toggleLoad(true));
  } catch {
    alert('Ошибка при загрузке c сервера');
  }
};

export const deleteUser =
  (id: number): ThunkType =>
  async dispatch => {
    await userAPI.deleteUser(id);
    const users = await userAPI.getUsers();
    dispatch(actions.getsUsers(users));
  };

export const addNewUser =
  (data: INewUser): ThunkType =>
  async dispatch => {
    await userAPI.addUser(data);
    dispatch(getsUsers());
  };

export const filterUser = (name: string): ThunkType => {
  return async dispatch => {
    if (name.length) {
      const users = await userAPI.filterUser(name);
      dispatch(actions.getsUsers(users));
    } else {
      const users = await userAPI.getUsers();
      dispatch(actions.getsUsers(users));
    }
  };
};

export const getProfileUser =
  (id: string): ThunkType =>
  async dispatch => {
    const profile = await profileApi.getProfileUser(id);
    dispatch(actions.getProfile(profile));
  };

export const updateProfile =
  (data: IUser): ThunkType =>
  async dispatch => {
    await profileApi.changeProfile(data);
    const id = String(data.id);
    dispatch(getProfileUser(id));
  };

export default userReducer;
