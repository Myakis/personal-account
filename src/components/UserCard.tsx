import { Box, Card, List, ListItem } from '@mui/material';
import React, { FC } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { IUser } from '../types/types';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../redux/reducer/user-reducer';
import { Link } from 'react-router-dom';

const UserCard: FC<IUser> = ({ name, email, id, username }) => {
  const dispatch = useDispatch();
  const onDeleteUser = (id: number) => {
    dispatch<any>(deleteUser(id));
  };

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <Box padding={'0 1rem'} display='flex' justifyContent={'space-between'} alignItems={'center'}>
        <Link to={`/user/${id}`}>
          <List style={{ flex: '1 1 auto' }}>
            <ListItem> Name: {name}</ListItem>
            <ListItem> Email: {email}</ListItem>
          </List>
        </Link>

        <DeleteIcon
          color='error'
          fontSize='small'
          onClick={() => onDeleteUser(id)}
          style={{ cursor: 'pointer' }}
        />
      </Box>
    </Card>
  );
};

export default UserCard;
