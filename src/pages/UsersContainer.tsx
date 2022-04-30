import { Container } from '@mui/material';
import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Search from '../components/Seacrh';
import UserList from '../components/UserList';
import { getsUsers } from '../redux/reducer/user-reducer';
import { StateType } from '../redux/store';

const UsersContainer: FC = () => {
  const users = useSelector((state: StateType) => state.usersPage.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(getsUsers());
  }, []);

  return (
    <>
      <Container maxWidth='md'>
        <Search />
        <UserList users={users} />
      </Container>
    </>
  );
};

export default UsersContainer;
