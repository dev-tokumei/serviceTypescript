import React from 'react';
import { Layout } from '../../layout/layout';
import {
  Autocomplete,
  Box,
  FormControl,
  FormGroup,
  TextField,
} from '@mui/material';
import './market.css';
import { Navbar } from '../navbar/navbar';

const Market = () => {
  const options = [
    { label: 'За все время' },
    { label: 'Сегнодня' },
    { label: 'Вчера' },
    { label: 'Последное 7 дней' },
    { label: 'Последное 30 дней' },
    { label: 'Текущий месяц' },
    { label: 'Прошлый месяц' },
  ];
  return (
    <Layout>
      <Navbar>Магазин</Navbar>
      <Box sx={{ width: 200, borderRadius: 4 }}>
        <FormGroup>
          <FormControl>
            <Autocomplete
              size='small'
              disableClearable
              sx={{ color: '#fff', label: { color: '#fff' } }}
              options={options}
              renderInput={(params) => (
                <TextField
                  sx={{
                    label: { color: '#fff' },
                    color: ' #fff',
                  }}
                  {...params}
                  label='Cтатусы'
                />
              )}
            />
          </FormControl>
        </FormGroup>
      </Box>
    </Layout>
  );
};

export default Market;
