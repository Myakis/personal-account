import { Box, Input } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterUser } from '../redux/reducer/user-reducer';
import { useAppDispatch } from '../redux/store';

const Search = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    dispatch<any>(filterUser(e.target.value));
  };

  return (
    <Box display={'flex'} justifyContent={'center'} marginY='2em'>
      <Input fullWidth value={value} onChange={searchHandler} />
    </Box>
  );
};

export default Search;
