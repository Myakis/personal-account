import { Box, Button } from '@mui/material';
import React, { FC } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PlusOneIcon from '@mui/icons-material/PlusOne';

interface IButton {
  back?: boolean;
  onHandler: () => void;
}
const ButtonBack: FC<IButton> = ({ onHandler, back }) => {
  return (
    <Box
      className='add__user'
      display={'flex'}
      justifyContent='center'
      top={'10px'}
      left={'50px'}
      overflow={'hidden'}>
      <Button variant='contained' onClick={onHandler}>
        {back ? <ArrowBackIcon /> : <PlusOneIcon />}
      </Button>
    </Box>
  );
};

export default ButtonBack;
