import React, { FC } from 'react';
import { Box, Card, List, ListItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteUser } from '../../redux/reducer/user-reducer';
import { IUser } from '../../types/types';

const UserCard: FC<IUser> = ({ name, email, id }) => {
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
