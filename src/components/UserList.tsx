import React, { FC } from 'react';
import { IUser } from '../types/types';
import UserCard from './UserCard';

interface IUserListProps {
  users: Array<IUser>;
}
const UserList: FC<IUserListProps> = ({ users }) => {
  if (!users.length) return <div>Нет пользователей...</div>;
  return (
    <>
      {users.map(user => {
        return <UserCard key={user.id} {...user} />;
      })}
    </>
  );
};

export default UserList;
