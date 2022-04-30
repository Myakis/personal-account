import { Card, Container } from '@mui/material';
import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProfileUser } from '../redux/reducer/user-reducer';
import { StateType } from '../redux/store';

const ProfileUser: FC = () => {
  const { id } = useParams();
  const { profile } = useSelector((state: StateType) => state.usersPage);

  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      dispatch<any>(getProfileUser(id));
    }
  }, []);
  if (!profile) return <div>загрузка пользователя</div>;
  return (
    <Container maxWidth='md'>
      <Card>{profile.name}</Card>
    </Container>
  );
};

export default ProfileUser;
