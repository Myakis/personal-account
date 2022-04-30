import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';

import { StateType } from './../redux/store';

//Типизация Actions
type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type ActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<
  InferValueTypes<T>
>;
//Типизирование Thnuk
export type ThunkType = ThunkAction<void, StateType, unknown, AnyAction>;

/////////////
// export interface IUser {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   address: {
//     street: string;
//     city: string;
//   };
// }

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
