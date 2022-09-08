import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loader = () => {
  return (
    <div>
       <Box sx={{ display: 'flex' }}>
      <CircularProgress color='secondary' />
    </Box>
    </div>
  )
}

export default Loader
