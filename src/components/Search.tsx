import { Box, Input, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { filterUser } from '../redux/reducer/user-reducer';

const Search = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    dispatch<any>(filterUser(e.target.value));
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
