import { Box, TextField } from '@mui/material';
import React, { useState } from 'react';

import { filterUser } from '../redux/reducer/user-reducer';
import { useAppDispatch } from '../types/types';

const Search = () => {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    dispatch(filterUser(e.target.value));
  };

  return (
    <Box display={'flex'} justifyContent={'center'} marginY='2em'>
      <TextField
        autoComplete='off'
        fullWidth
        id='standard-basic'
        value={value}
        onChange={searchHandler}
        label='Поиск по имени'
        variant='standard'
      />
    </Box>
  );
};

export default Search;
