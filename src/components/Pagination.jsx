import * as React from 'react';
import Pagination from '@mui/material/Pagination';

export default function PaginationRounded() {
  return (

      <Pagination
        count={5}
        shape="rounded"
        variant="outlined"
        size = "large"
        sx={{
          '& .MuiPaginationItem-page.Mui-selected': {
            border: '1px solid',
            backgroundColor: '#E6CAFF',
            color: '#280C40',
            borderColor: '#280C40',
            fontWeight: 'bold',
          },
          '& .MuiPaginationItem-icon': {
            backgroundColor: 'white', 
            color: '#280C40',
            fontSize: '2vw',
    
          },
          '&& .MuiTouchRipple-rippleVisible': {
            animationDuration: '400ms',
            color: '#E6CAFF'
          },
        color: 'black'}}
      />

  );
}