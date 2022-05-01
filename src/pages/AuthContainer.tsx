import React, { useState } from 'react';
import { Box } from '@mui/material';
import { useDispatch } from 'react-redux';

import { actions } from '../redux/reducer/auth-reducer';
import { useSelector } from 'react-redux';
import { StateType } from '../redux/store';
import Login from '../components/Login';

export interface IDataForm {
  password: string;
  email: string;
}

const AuthContainer = () => {
  const [isLogin, setLogin] = useState(true);
  const errorLogin = useSelector((state: StateType) => state.auth.error);
  const dispatch = useDispatch();

  const onChangeForm = () => {
    dispatch(actions.addError(''));
    setLogin(!isLogin);
  };

  return (
    <Box display='flex' alignItems={'center'} justifyContent='center' minHeight={'100vh'}>
      <Login isLogin={isLogin} errorLogin={errorLogin} onChangeForm={onChangeForm} />
    </Box>
  );
};

export default AuthContainer;
