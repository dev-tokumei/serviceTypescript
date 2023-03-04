import React from 'react';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import { Layout } from '../../layout/layout';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import './cashbox.css';

const Cashback = () => {
  return (
    <Layout>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: '460px',
            height: '28px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              width: '231px',
              justifyContent: 'space-between',
            }}
          >
            <Typography style={{ fontSize: '23px', fontWeight: 'bold' }}>
              Баланс
            </Typography>
            <Typography style={{ fontSize: '23px', fontWeight: 'bold' }}>
              1000,00 TJS
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <Typography sx={{ fontSize: '0.75rem' }}>Приход</Typography>
              <Typography
                sx={{ fontSize: '1rem', fontWeight: 'bold', marginTop: '-5px' }}
              >
                0,00 TJS
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: '12px' }}>Расход</Typography>
              <Typography
                sx={{ fontSize: '1rem', fontWeight: 'bold', marginTop: '-5px' }}
              >
                0,00 TJS
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: '12px' }}>Итог</Typography>
              <Typography
                sx={{ fontSize: '1rem', fontWeight: 'bold', marginTop: '-5px' }}
              >
                0,00 TJS
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <Tooltip title='Фильтр'>
            <IconButton style={{ color: '#fff' }}>
              <FilterListOutlinedIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Layout>
  );
};

export default Cashback;
