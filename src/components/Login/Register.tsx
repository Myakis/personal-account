import React, { FC } from 'react';
import Login from './Login';

interface IRegister {
  errorLogin: string | null;
  onChangeForm: () => void;
}
const Register: FC<IRegister> = ({ errorLogin, onChangeForm }) => {
  return <Login isLogin={false} errorLogin={errorLogin} onChangeForm={onChangeForm} />;
};

export default Register;
