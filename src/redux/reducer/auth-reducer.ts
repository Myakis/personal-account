import { BaseThunkType } from './../../types/types';
import { authAPI, IDataForm } from './../../api/api';
import { ActionsTypes } from '../../types/types';

let initialState = {
  isAuth: false as boolean,
  profile: null as { email: string } | null,
  error: null as null | string,
};

export type initialStateType = typeof initialState;

type ThunkType = BaseThunkType<ActionsTypes<typeof actions>>;

const authReducer = (
  state = initialState,
  action: ActionsTypes<typeof actions>,
): initialStateType => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return {
        ...state,
        isAuth: action.payload.isAuth,
        profile: {
          ...state.profile,
          email: action.payload.email,
        },
        error: null,
      };
    case 'ADD_ERROR':
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};

//Action Creator
export const actions = {
  setAuthUSerData: (email: string, isAuth: boolean) =>
    ({ type: 'SET_USER_DATA', payload: { email, isAuth } } as const),
  addError: (error: string) => ({ type: 'ADD_ERROR', error } as const),
};
interface IResponseLogin {
  accessToken: string;
  user: {
    email: 'string';
    id: number;
  };
}
export const login =
  (data: IDataForm): ThunkType =>
  async dispatch => {
    try {
      const dataForm: IResponseLogin = await authAPI.login(data);
      dispatch(actions.setAuthUSerData(dataForm.user.email, true));
    } catch (e) {
      dispatch(actions.addError('Неверный email или пароль'));
    } finally {
    }
  };
export const register =
  (data: IDataForm): ThunkType =>
  async dispatch => {
    try {
      const dataForm = await authAPI.register(data);
      dispatch(actions.setAuthUSerData(dataForm.user.email, true));
    } catch (e) {
      dispatch(actions.addError('Пользователь с таким email уже существует'));
    } finally {
    }
  };

export default authReducer;
