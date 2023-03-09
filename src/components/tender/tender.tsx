import {
  Box,
  Button,
  Drawer,
  FormControl,
  FormGroup,
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { Layout } from '../../layout/layout';
import { Navbar } from '../navbar/navbar';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete } from '@mui/lab';

const Tender = () => {
  const [onOpen, setOnOpen] = useState(false);
  const country = [{ label: 'Таджикистан' }, { label: 'Россия' }];
  const city = [{ label: 'Душанбе' }, { label: 'Москва' }];

  const drawerOpen = () => {
    setOnOpen(true);
    console.log('test: true');
  };
  const drawerClose = () => {
    setOnOpen(false);
    console.log('test: false');
  };
  return (
    <Layout>
      <Navbar>Объявления</Navbar>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <TextField
          placeholder='Поиск'
          sx={{
            width: '100%',
            borderRadius: 35,
            label: { color: 'white' },
            color: '#fff',
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon style={{ color: '#fff' }} />
              </InputAdornment>
            ),
          }}
          variant='outlined'
        />
        <Box sx={{ ml: 2 }}>
          <Tooltip title='Фильтр'>
            <IconButton onClick={drawerOpen} style={{ color: '#fff' }}>
              <FilterListOutlinedIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Drawer anchor='right' open={onOpen} onClose={drawerClose}>
          <Box
            sx={{
              width: '360px',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              padding: 3,
              background: '#45544F',
            }}
          >
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                pb: 5,
              }}
            >
              <Typography
                variant='h6'
                sx={{ color: '#fff', fontWeight: 'bold' }}
              >
                Фильтр
              </Typography>
              <Tooltip title='Закрить'>
                <IconButton onClick={drawerClose} style={{ color: '#fff' }}>
                  <CloseOutlinedIcon />
                </IconButton>
              </Tooltip>
            </Box>
            <FormGroup>
              <FormControl>
                <Autocomplete
                  disableClearable
                  sx={{ color: '#fff', label: { color: '#fff' } }}
                  options={country}
                  renderInput={(params) => (
                    <TextField
                      sx={{ label: { color: '#fff' }, color: ' #fff' }}
                      {...params}
                      label='Cтрана'
                    />
                  )}
                />
                <Autocomplete
                  disableClearable
                  sx={{ pt: 3 }}
                  options={city}
                  renderInput={(params) => (
                    <TextField
                      sx={{ label: { color: '#fff' }, color: ' #fff', pb: 5 }}
                      {...params}
                      label='Город'
                    />
                  )}
                />
              </FormControl>
            </FormGroup>
            <Button
              size='large'
              fullWidth
              className='btnmodal bg-gradient-to-r from-teal-300 to-teal-500 font-bold'
              sx={{
                textTransform: 'capitalize',
                color: 'black',
                borderRadius: 3,
              }}
            >
              Обновить
            </Button>
          </Box>
        </Drawer>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '500px',
        }}
      >
        <Typography variant='h6'>Здесь по пусто</Typography>
      </Box>
    </Layout>
  );
};

export default Tender;
