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
} from '@mui/material';
import { Layout } from '../../layout/layout';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import './cashbox.css';

const Cashback = () => {
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
            <IconButton onClick={drawerOpen} style={{ color: '#fff' }}>
              <FilterListOutlinedIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <Box>
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

export default Cashback;
