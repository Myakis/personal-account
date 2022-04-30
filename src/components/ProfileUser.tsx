import { Button, Card, Container, Input, InputLabel } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Formik } from 'formik';
import {
  addNewUser,
  getProfileUser,
  getsUsers,
  updateProfile,
} from '../redux/reducer/user-reducer';
import { StateType } from '../redux/store';
import { Box } from '@mui/system';
import { IUser } from '../types/types';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Preloader from './common/Preloader';

interface IValuesForm {
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
  const [edit, setEdit] = useState(true);
  const { id } = useParams();
  let navigate = useNavigate();
  const profile: IUser = useSelector((state: StateType) => state.usersPage.profile);
  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      dispatch<any>(getProfileUser(id));
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
        <Button variant='contained' onClick={onBack} size={'small'}>
          <ArrowBackIcon />
        </Button>
      </Box>
      <Card style={{ padding: '1rem' }}>
        <h2 style={{ textAlign: 'center' }}>Профиль пользователя</h2>

        <Box display={'flex'} justifyContent={'flex-end'}>
          <Button disabled={!edit} onClick={onEditHandler}>
            Редактировать
          </Button>
        </Box>

        <Formik
          initialValues={{
            name: profile ? profile.name : '',
            email: profile ? profile.email : '',
            username: profile ? profile.username : '',
            city: profile ? profile.address.city : '',
            street: profile ? profile.address.street : '',
          }}
          validate={(values: IValuesForm) => {
            const errors = {} as IValuesForm;
            if (!values.email) {
              errors.email = 'Обязательно поле';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
              errors.email = 'Невалидный email';
            }
            if (!values.name) {
              errors.name = 'Обязательное поле';
            }
            if (!values.username) {
              errors.username = 'Обязательное поле';
            }

            return errors;
          }}
          onSubmit={values => {
            if (profile !== null) {
              const dataProfile = {
                id: profile.id,
                name: values.name,
                username: values.username,
                email: values.email,
                address: {
                  city: values.city,
                  street: values.street,
                },
              };
              dispatch<any>(updateProfile(dataProfile));
            } else {
              const dataProfile = {
                name: values.name,
                username: values.username,
                email: values.email,
                address: {
                  city: values.city,
                  street: values.street,
                },
              };
              dispatch<any>(addNewUser(dataProfile));
            }

            setEdit(true);
          }}>
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Box display={'flex'} flexDirection={'column'} gap={'1rem'}>
                {/* {Object.keys(profile)} */}
                <InputLabel style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Box component={'span'}>Имя:</Box>
                  <Input
                    disabled={edit}
                    fullWidth
                    placeholder='Имя'
                    type='text'
                    name='name'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  {errors.name && touched.name && <div className='error'>{errors.name}</div>}
                </InputLabel>
                <InputLabel style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Box component={'span'}>Никнэйм:</Box>
                  <Input
                    disabled={edit}
                    fullWidth
                    placeholder='Никнэйм'
                    type='text'
                    name='username'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                  />
                  {errors.username && touched.username && (
                    <div className='error'>{errors.username}</div>
                  )}
                </InputLabel>
                <InputLabel style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Box component={'span'}>Email:</Box>
                  <Input
                    disabled={edit}
                    fullWidth
                    placeholder='Email'
                    type='email'
                    name='email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email && <div className='error'>{errors.email}</div>}
                </InputLabel>
                <InputLabel style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Box component={'span'}>Город:</Box>
                  <Input
                    disabled={edit}
                    fullWidth
                    placeholder='Город'
                    type='text'
                    name='city'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.city}
                  />
                  {errors.city && touched.city && <div className='error'>{errors.city}</div>}
                </InputLabel>
                <InputLabel style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Box component={'span'}>Улица:</Box>
                  <Input
                    disabled={edit}
                    fullWidth
                    placeholder='Улица'
                    type='text'
                    name='street'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.street}
                  />
                  {errors.street && touched.street && <div className='error'>{errors.street}</div>}
                </InputLabel>

                <Box display={'flex'} justifyContent='flex-end'>
                  <Button
                    style={{ width: '150px' }}
                    color='inherit'
                    type='submit'
                    size='small'
                    disabled={edit || Object.keys(errors).length > 0}>
                    Сохранить
                  </Button>
                </Box>
              </Box>
            </form>
          )}
        </Formik>
      </Card>
    </Container>
  );
};

export default ProfileUser;
