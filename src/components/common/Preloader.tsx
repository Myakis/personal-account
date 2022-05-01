import React from 'react';
import { Box } from '@mui/system';

const Preloader = () => {
  return (
    <Box position={'fixed'} top={'50%'} left={'50%'} style={{ transform: 'translate(-50%,-50%)' }}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        width='100px'
        height='100px'
        viewBox='0 0 100 100'
        preserveAspectRatio='xMidYMid'>
        <circle cx='18' cy='50' r='4' fill='#93dbe9'>
          <animate
            attributeName='cy'
            values='34;66;34'
            dur='1s'
            calcMode='spline'
            keySplines='0.5 0 0.5 1;0.5 0 0.5 1'
            begin='0s'
            repeatCount='indefinite'
          />
        </circle>
        <circle cx='27' cy='61.31370849898476' r='4' fill='#689cc5'>
          <animate
            attributeName='cy'
            values='34;66;34'
            dur='1s'
            calcMode='spline'
            keySplines='0.5 0 0.5 1;0.5 0 0.5 1'
            begin='-0.125s'
            repeatCount='indefinite'
          />
        </circle>
        <circle cx='36' cy='66' r='4' fill='#5e6fa3'>
          <animate
            attributeName='cy'
            values='34;66;34'
            dur='1s'
            calcMode='spline'
            keySplines='0.5 0 0.5 1;0.5 0 0.5 1'
            begin='-0.25s'
            repeatCount='indefinite'
          />
        </circle>
        <circle cx='45' cy='61.31370849898476' r='4' fill='#3b4368'>
          <animate
            attributeName='cy'
            values='34;66;34'
            dur='1s'
            calcMode='spline'
            keySplines='0.5 0 0.5 1;0.5 0 0.5 1'
            begin='-0.375s'
            repeatCount='indefinite'
          />
        </circle>
        <circle cx='54' cy='50' r='4' fill='#93dbe9'>
          <animate
            attributeName='cy'
            values='34;66;34'
            dur='1s'
            calcMode='spline'
            keySplines='0.5 0 0.5 1;0.5 0 0.5 1'
            begin='-0.5s'
            repeatCount='indefinite'
          />
        </circle>
        <circle cx='63' cy='38.68629150101524' r='4' fill='#689cc5'>
          <animate
            attributeName='cy'
            values='34;66;34'
            dur='1s'
            calcMode='spline'
            keySplines='0.5 0 0.5 1;0.5 0 0.5 1'
            begin='-0.625s'
            repeatCount='indefinite'
          />
        </circle>
        <circle cx='72' cy='34' r='4' fill='#5e6fa3'>
          <animate
            attributeName='cy'
            values='34;66;34'
            dur='1s'
            calcMode='spline'
            keySplines='0.5 0 0.5 1;0.5 0 0.5 1'
            begin='-0.75s'
            repeatCount='indefinite'
          />
        </circle>
        <circle cx='81' cy='38.68629150101523' r='4' fill='#3b4368'>
          <animate
            attributeName='cy'
            values='34;66;34'
            dur='1s'
            calcMode='spline'
            keySplines='0.5 0 0.5 1;0.5 0 0.5 1'
            begin='-0.875s'
            repeatCount='indefinite'
          />
        </circle>
      </svg>
    </Box>
  );
};

export default Preloader;
