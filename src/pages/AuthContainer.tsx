import { Box, Button, Input, InputLabel } from '@mui/material';
import { error } from 'console';
import { Formik } from 'formik';

import React from 'react';

interface IDataForm {
  password: string;
  email: string;
}

interface IFormikProps {
  values: IDataForm;
  errors: IDataForm;
  touched: boolean;
  isSubmitting: boolean;

  handleChange: (e: React.ChangeEvent<any>) => void;
  handleBlur: (e: React.FocusEvent<any, Element>) => void;
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
}

const AuthContainer = () => {
  return (
    <Box display='flex' alignItems={'center'} justifyContent='center' minHeight={'100vh'}>
      <Box
        display={'flex'}
        flexDirection='column'
        bgcolor='darkcyan'
        padding={'2rem 1rem'}
        borderRadius='10px'
        gap='1rem'
        maxWidth='500px'
        width={'100%'}>
        <h1>Вход в личный кабинет</h1>
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
            console.log(values);
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
                <Box display={'flex'} justifyContent='flex-end'>
                  <Button
                    style={{ width: '150px' }}
                    color='inherit'
                    type='submit'
                    disabled={isSubmitting}></Button>
                </Box>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default AuthContainer;
