import React from 'react';
import { Box, TableCell, Typography } from '@mui/material';
import { Layout } from '../../layout/layout';
import { Navbar } from '../navbar/navbar';
import './report.css';

function Report() {
  return (
    <Layout>
      <Navbar>Отчеты</Navbar>
      <Box sx={{ width: '100%' }}>
        <Typography sx={{ fontWeight: 'bold', fontSize: 20 }}>
          Сотрудники
        </Typography>
        <TableCell
          align='center'
          variant='body'
          size='medium'
          sx={{ width: '100%', color: '#fff' }}
        >
          <Typography>Зарплата</Typography>
        </TableCell>
      </Box>
    </Layout>
  );
}

export default Report;
