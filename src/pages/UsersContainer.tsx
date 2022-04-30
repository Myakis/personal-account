import { Box, Button, Container } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Search from '../components/Seacrh';
import UserList from '../components/UserList';
import { getsUsers } from '../redux/reducer/user-reducer';
import { StateType } from '../redux/store';
import PlusOneIcon from '@mui/icons-material/PlusOne';
import { Link } from 'react-router-dom';
import ProfileUser from '../components/ProfileUser';

const UsersContainer: FC = () => {
  const users = useSelector((state: StateType) => state.usersPage.users);
  const isLoad = useSelector((state: StateType) => state.usersPage.isLoad);
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState(false);

  useEffect(() => {
    dispatch<any>(getsUsers());
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
            <UserList users={users} isLoad={isLoad} />
            <Box
              display={'flex'}
              justifyContent='center'
              position={'absolute'}
              top={'10px'}
              left={'50px'}
              width='50px'
              height={'50px'}
              borderRadius={'100%'}
              overflow={'hidden'}>
              <Button variant='contained' onClick={addNewUser}>
                <PlusOneIcon />
              </Button>
            </Box>
          </>
        )}
      </Container>
    </>
  );
};

export default UsersContainer;
