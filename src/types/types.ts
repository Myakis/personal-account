import { ThunkAction } from 'redux-thunk';
import { Action, Dispatch } from 'redux';

import { StateType } from './../redux/store';

//Типизация Actions
type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type ActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<
  InferValueTypes<T>
>;

//Типизирование Thnuk
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<
  R,
  StateType,
  unknown,
  A
>;

//Не смог разобраться с типизаций useDispatch react-redux v>8
//Переписал на фукционал, который шел из коробки в react-redux v7.2.6
export type TDispatch = Dispatch<any>;

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
