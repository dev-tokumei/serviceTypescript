import React, { useState } from 'react';
import { Layout } from '../../layout/layout';
import { TabContext } from '@mui/lab';
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  Drawer,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  Tab,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TabPanel from '@mui/lab/TabPanel';
import TabList from '@mui/lab/TabList';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import ViewColumnOutlinedIcon from '@mui/icons-material/ViewColumnOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import './order.css';
const Order: React.FC = () => {
  const [value, setValue] = useState('1');
  const [onOpen, setOnOpen] = useState(false);
  const options = [{ label: 'Killer' }];
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const openBtn = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseBtn = () => {
    setAnchorEl(null);
  };

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
      <TabContext value={value}>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <TabList
            variant='scrollable'
            scrollButtons='auto'
            sx={{ width: '100%', color: '#fff' }}
            onChange={handleChange}
            aria-label='lab API tabs example'
          >
            <Tab
              sx={{ color: '#fff', textTransform: 'inherit' }}
              label='Все'
              value='1'
            />
            <Tab
              sx={{ color: '#fff', textTransform: 'inherit' }}
              label='Активные ⚡'
              value='2'
            />
            <Tab
              sx={{ color: '#fff', textTransform: 'inherit' }}
              label='В работе 🔧'
              value='3'
            />
            <Tab
              sx={{ color: '#fff', textTransform: 'inherit' }}
              label='Готовые 🙂'
              value='4'
            />
            <Tab
              sx={{ color: '#fff', textTransform: 'inherit' }}
              label='Ждут запчасти 📦'
              value='5'
            />
            <Tab
              sx={{ color: '#fff', textTransform: 'inherit' }}
              label='Согласование ⏳'
              value='6'
            />
          </TabList>
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
            <Tooltip title='Калонки'>
              <IconButton onClick={handleClick} style={{ color: '#fff' }}>
                <ViewColumnOutlinedIcon />
              </IconButton>
            </Tooltip>
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
          <Menu
            PaperProps={{ sx: { width: '230px' } }}
            aria-labelledby='demo-positioned-button'
            anchorEl={anchorEl}
            open={openBtn}
            onClose={handleCloseBtn}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            sx={{ width: '300px' }}
          >
            <MenuItem>
              <Typography sx={{ color: '#fff' }}>Колонки</Typography>
            </MenuItem>
            <MenuItem sx={{ color: '#fff' }} onClick={handleCloseBtn}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox size='small' sx={{ color: '#fff' }} />}
                  label='Обновлен'
                />
              </FormGroup>
            </MenuItem>
            <MenuItem sx={{ color: '#fff' }} onClick={handleCloseBtn}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox size='small' sx={{ color: '#fff' }} />}
                  label='Статус'
                />
              </FormGroup>
            </MenuItem>
            <MenuItem sx={{ color: '#fff' }} onClick={handleCloseBtn}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox size='small' sx={{ color: '#fff' }} />}
                  label='Срок'
                />
              </FormGroup>
            </MenuItem>
            <MenuItem sx={{ color: '#fff' }} onClick={handleCloseBtn}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox size='small' sx={{ color: '#fff' }} />}
                  label='Клиент'
                />
              </FormGroup>
            </MenuItem>
            <MenuItem sx={{ color: '#fff' }} onClick={handleCloseBtn}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox size='small' sx={{ color: '#fff' }} />}
                  label='Менеджер'
                />
              </FormGroup>
            </MenuItem>
            <MenuItem sx={{ color: '#fff' }} onClick={handleCloseBtn}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox size='small' sx={{ color: '#fff' }} />}
                  label='Исполнитель'
                />
              </FormGroup>
            </MenuItem>
            <MenuItem sx={{ color: '#fff' }} onClick={handleCloseBtn}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox size='small' sx={{ color: '#fff' }} />}
                  label='Итого, TJS'
                />
              </FormGroup>
            </MenuItem>
            <MenuItem sx={{ color: '#fff' }} onClick={handleCloseBtn}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox size='small' sx={{ color: '#fff' }} />}
                  label='Причина обращения'
                />
              </FormGroup>
            </MenuItem>
            <MenuItem sx={{ color: '#fff' }} onClick={handleCloseBtn}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox size='small' sx={{ color: '#fff' }} />}
                  label='Внешний выд'
                />
              </FormGroup>
            </MenuItem>
            <MenuItem sx={{ color: '#fff' }} onClick={handleCloseBtn}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox size='small' sx={{ color: '#fff' }} />}
                  label='Вид устройство'
                />
              </FormGroup>
            </MenuItem>
            <MenuItem sx={{ color: '#fff' }} onClick={handleCloseBtn}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox size='small' sx={{ color: '#fff' }} />}
                  label='IMEI/SN'
                />
              </FormGroup>
            </MenuItem>
            <MenuItem sx={{ color: '#fff' }} onClick={handleCloseBtn}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox size='small' sx={{ color: '#fff' }} />}
                  label='Бренд'
                />
              </FormGroup>
            </MenuItem>
            <MenuItem sx={{ color: '#fff' }} onClick={handleCloseBtn}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox size='small' sx={{ color: '#fff' }} />}
                  label='Модель'
                />
              </FormGroup>
            </MenuItem>
            <MenuItem sx={{ color: '#fff' }} onClick={handleCloseBtn}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox size='small' sx={{ color: '#fff' }} />}
                  label='Комплектация'
                />
              </FormGroup>
            </MenuItem>
            <MenuItem sx={{ color: '#fff' }} onClick={handleCloseBtn}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox size='small' sx={{ color: '#fff' }} />}
                  label='Пароль'
                />
              </FormGroup>
            </MenuItem>
          </Menu>
        </Box>
        <TabPanel value='1'>Все</TabPanel>
        <TabPanel value='2'>Активные</TabPanel>
        <TabPanel value='3'>В работе</TabPanel>
        <TabPanel value='4'>Готовые</TabPanel>
        <TabPanel value='5'>Ждут запчасти</TabPanel>
        <TabPanel value='6'>Согласование</TabPanel>
      </TabContext>
    </Layout>
  );
};

export default Order;
