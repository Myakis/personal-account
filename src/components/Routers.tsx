import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import AuthContainer from '../pages/AuthContainer';
import UsersContainer from '../pages/UsersContainer';
import { StateType } from '../redux/store';
import ProfileUser from './User/UserProfile';

const Routers = () => {
  const isAuth = useSelector((state: StateType) => state.auth.isAuth);

  return (
    <Routes>
      {isAuth ? (
        <>
          <Route path='/login' element={<Navigate to={'/'} />} />
          <Route path='/' element={<UsersContainer />} />
          <Route path='/user/:id' element={<ProfileUser />} />
          <Route path='/newUser' element={<ProfileUser />} />
        </>
      ) : (
        <>
          <Route path='/login' element={<AuthContainer />} />
          <Route path='/*' element={<Navigate to={'/login'} />} />
        </>
      )}
    </Routes>
  );
};

export default Routers;
