import React, { useState } from 'react';
import {
  Autocomplete,
  Box,
  Button,
  Drawer,
  FormControl,
  FormGroup,
  IconButton,
  TextField,
  Tooltip,
  Typography,
  InputAdornment,
} from '@mui/material';
import { Layout } from '../../layout/layout';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import SearchIcon from '@mui/icons-material/Search';
import './inventory.css';
import { Navbar } from '../navbar/navbar';

const Inventory = () => {
  const [onOpen, setOnOpen] = useState(false);
  const options = [{ label: 'Killer' }];
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
      <Navbar>Склад</Navbar>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box sx={{ width: '250px' }}>
          <Typography>Все категория</Typography>
        </Box>
        <Box sx={{ width: '100%', p: 1 }}>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
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
            <Tooltip title='Фильтр'>
              <IconButton onClick={drawerOpen} style={{ color: '#fff' }}>
                <FilterListOutlinedIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
        <Drawer anchor='right' open={onOpen} onClose={drawerClose}>
          <Box
            sx={{
              width: '360px',
              height: '100%',
              display: 'grid',
              alignItems: 'center',
              padding: 3,
              background: '#45544F',
              overflow: 'auto',
            }}
          >
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
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
                  options={options}
                  renderInput={(params) => (
                    <TextField
                      sx={{ label: { color: '#fff' }, color: ' #fff' }}
                      {...params}
                      label='Cтатусы'
                    />
                  )}
                />
                <Autocomplete
                  disableClearable
                  sx={{ pt: 3 }}
                  options={options}
                  renderInput={(params) => (
                    <TextField
                      sx={{ label: { color: '#fff' }, color: ' #fff' }}
                      {...params}
                      label='Менеджеры'
                    />
                  )}
                />
                <Autocomplete
                  disableClearable
                  sx={{ pt: 3 }}
                  options={options}
                  renderInput={(params) => (
                    <TextField
                      sx={{ label: { color: '#fff' }, color: ' #fff' }}
                      {...params}
                      label='Исполнители'
                    />
                  )}
                />
                <Autocomplete
                  disableClearable
                  sx={{ pt: 3 }}
                  options={options}
                  renderInput={(params) => (
                    <TextField
                      sx={{ label: { color: '#fff' }, color: ' #fff' }}
                      {...params}
                      label='Создан '
                    />
                  )}
                />
                <Autocomplete
                  disableClearable
                  sx={{ pt: 3 }}
                  options={options}
                  renderInput={(params) => (
                    <TextField
                      sx={{ label: { color: '#fff' }, color: ' #fff' }}
                      {...params}
                      label='Закрыть'
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
    </Layout>
  );
};

export default Inventory;
