import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';

import store, { StateType } from './../redux/store';
import { useDispatch } from 'react-redux';

//Типизация Actions
type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type ActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<
  InferValueTypes<T>
>;

//Типизирование Thunk
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<
  R,
  StateType,
  unknown,
  A
>;

//Типизация dispatch для корректной работы с thunk в react-redux v.>8
type AppAction = ReturnType<typeof store.dispatch>;
export type AppDispatch = ThunkDispatch<StateType, any, AppAction>;
export const useAppDispatch = () => useDispatch<AppDispatch>();

//////////////////////
export interface IUser extends INewUser {
  id: number;
}

export interface INewUser {
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
}

export interface ILogin {
  isLogin: boolean;
  errorLogin: string | null;
  onChangeForm: () => void;
}

export interface IValuesForm {
  name: string;
  email: string;
  username: string;
  street: string;
  city: string;
}
