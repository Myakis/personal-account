import { Box } from '@mui/material';
import React, { FC } from 'react';
import { IUser } from '../types/types';
import Preloader from './common/Preloader';
import UserCard from './UserCard';

interface IUserListProps {
  users: Array<IUser>;
  isLoad: boolean;
}
const UserList: FC<IUserListProps> = ({ users, isLoad }) => {
  if (!isLoad) return <Preloader />;
  if (!users.length)
    return (
      <Box textAlign={'center'} fontSize={'25px'}>
        Не найдено
      </Box>
    );
  return (
    <>
      {users.map(user => {
        return <UserCard key={user.id} {...user} />;
      })}
    </>
  );
};

export default UserList;
