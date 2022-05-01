import React, { FC } from 'react';
import { Box, Button, Input, InputLabel, Link } from '@mui/material';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import { IDataForm } from '../pages/AuthContainer';
import { login, register } from '../redux/reducer/auth-reducer';
import { ILogin, TDispatch } from '../types/types';

const Login: FC<ILogin> = ({ errorLogin, isLogin, onChangeForm }) => {
  const dispatch: TDispatch = useDispatch();

  return (
    <Box
      display={'flex'}
      flexDirection='column'
      bgcolor='darkcyan'
      padding={'2rem 1rem'}
      borderRadius='10px'
      gap='1rem'
      maxWidth='500px'
      width={'100%'}>
      <h1>
        {isLogin ? 'Вход в личный кабинет' : 'Регистрация'}
        {errorLogin && <span>{errorLogin}</span>}
      </h1>

      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values: IDataForm) => {
          const errors = {} as IDataForm;
          if (!values.email) {
            errors.email = 'Обязательно поле';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Невалидный email';
          }
          if (!values.password) {
            errors.password = 'Обязательное поле';
          } else if (values.password.length < 6) {
            errors.password = 'Пароль должен быть больше 6';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          if (isLogin) {
            dispatch(login(values));
          } else {
            dispatch(register(values));
          }
          setSubmitting(false);
        }}>
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <Box display={'flex'} flexDirection={'column'} gap={'1rem'}>
              <InputLabel>
                <Input
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

              <InputLabel>
                <Input
                  fullWidth
                  placeholder='Пароль'
                  type='password'
                  name='password'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password && (
                  <div className='error'>{errors.password}</div>
                )}
              </InputLabel>
              <Box display={'flex'} justifyContent='space-between' alignItems={'center'}>
                <Box className={'form__prompt'}>
                  {isLogin ? (
                    <p>
                      Вас еще нет с нами?{' '}
                      <Link color='inherit' onClick={onChangeForm}>
                        Зарегистрируйтесь
                      </Link>
                    </p>
                  ) : (
                    <p>
                      Уже зарегистрированы?{' '}
                      <Link color='inherit' onClick={onChangeForm}>
                        Войти
                      </Link>
                    </p>
                  )}
                </Box>
                <Button
                  style={{ width: '150px' }}
                  size={'small'}
                  color='inherit'
                  type='submit'
                  disabled={isSubmitting}>
                  {isLogin ? ' Войти' : 'Зарегистриваться'}
                </Button>
              </Box>
            </Box>
          </form>
        )}
      </Formik>
      <Box display={'flex'} justifyContent='flex-end'></Box>
    </Box>
  );
};

export default Login;
