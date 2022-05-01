import React, { FC } from 'react';
import { Button, Input, InputLabel } from '@mui/material';
import { Box } from '@mui/system';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { addNewUser, updateProfile } from '../../redux/reducer/user-reducer';
import { IUser, IValuesForm, TDispatch } from '../../types/types';

interface IUserProfile {
  profile: IUser | null;
  edit: boolean;
  setEdit: (edit: boolean) => void;
}

const UserProfileForm: FC<IUserProfile> = ({ profile, edit, setEdit }) => {
  const dispatch: TDispatch = useDispatch();
  return (
    <div>
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
          if (profile) {
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
            dispatch(updateProfile(dataProfile));
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
            dispatch(addNewUser(dataProfile));
          }

          setEdit(true);
        }}>
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Box display={'flex'} flexDirection={'column'} gap={'1rem'}>
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
    </div>
  );
};

export default UserProfileForm;
