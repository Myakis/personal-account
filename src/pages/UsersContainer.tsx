import React, { FC, useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { useSelector } from 'react-redux';

import Search from '../components/Search';
import UserList from '../components/User/UserList';
import { getsUsers } from '../redux/reducer/user-reducer';
import { StateType } from '../redux/store';
import ProfileUser from '../components/User/UserProfile';
import ButtonBack from '../components/common/ButtonBack';
import { useAppDispatch } from '../types/types';

const UsersContainer: FC = () => {
  const isLoad = useSelector((state: StateType) => state.usersPage.isLoad);
  const users = useSelector((state: StateType) => state.usersPage.users);
  const [newUser, setNewUser] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getsUsers());
  }, []);

  const addNewUser = () => {
    setNewUser(true);
  };

  return (
    <>
      <Container maxWidth='md'>
        {newUser ? (
          <ProfileUser isNewUser={newUser} setNewUser={setNewUser} />
        ) : (
          <>
            <Search />
            <ButtonBack onHandler={addNewUser}></ButtonBack>
            <UserList users={users} isLoad={isLoad} />
          </>
        )}
      </Container>
    </>
  );
};

export default UsersContainer;
