import React, { FC, useEffect, useState } from 'react';
import { Button, Card, Container } from '@mui/material';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Box } from '@mui/system';

import { getProfileUser } from '../../redux/reducer/user-reducer';
import { StateType } from '../../redux/store';
import { IUser, TDispatch } from '../../types/types';
import Preloader from '../common/Preloader';
import ButtonBack from '../common/ButtonBack';
import UserProfileForm from './UserProfileForm';

export interface IValuesForm {
  name: string;
  email: string;
  username: string;
  street: string;
  city: string;
}

interface IProfileUser {
  isNewUser?: boolean;
  setNewUser?: (newUser: boolean) => void;
}

const ProfileUser: FC<IProfileUser> = ({ setNewUser }) => {
  const profile: IUser | null = useSelector((state: StateType) => state.usersPage.profile);
  const [edit, setEdit] = useState(true);
  const dispatch: TDispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(getProfileUser(id));
    }
    if (setNewUser) {
      setEdit(false);
    }
  }, []);

  const onEditHandler = () => {
    setEdit(false);
  };
  const onBack = () => {
    if (setNewUser) {
      setNewUser(false);
    } else {
      navigate(-1);
    }
  };

  if (!profile && id) return <Preloader />;

  return (
    <Container maxWidth='md'>
      <ButtonBack back={true} onHandler={onBack} />

      <Card style={{ padding: '1rem' }}>
        <h2 style={{ textAlign: 'center' }}>Профиль пользователя</h2>

        <Box display={'flex'} justifyContent={'flex-end'}>
          <Button disabled={!edit} onClick={onEditHandler}>
            Редактировать
          </Button>
        </Box>

        <UserProfileForm edit={edit} profile={profile} setEdit={setEdit} />
      </Card>
    </Container>
  );
};

export default ProfileUser;
