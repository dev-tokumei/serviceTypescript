import React, { useState } from 'react';
import { Layout } from '../../layout/layout';
import { TabContext } from '@mui/lab';
import {
  Box,
  IconButton,
  InputAdornment,
  Tab,
  TextField,
  Tooltip,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TabPanel from '@mui/lab/TabPanel';
import TabList from '@mui/lab/TabList';
import EditIcon from '@mui/icons-material/Edit';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import ViewColumnOutlinedIcon from '@mui/icons-material/ViewColumnOutlined';
const Order: React.FC = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
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
              value='5'
            />
            <Tab
              sx={{ color: '#fff', textTransform: 'inherit' }}
              label='Ждут запчасти 📦'
              value='6'
            />
            <Tab
              sx={{ color: '#fff', textTransform: 'inherit' }}
              label='Согласование ⏳'
              value='7'
            />
          </TabList>
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
          <Tooltip title='fd'>
            <IconButton style={{ color: '#fff' }}>
              <FilterListOutlinedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title='Сортироват'>
            <IconButton style={{ color: '#fff' }}>
              <ViewColumnOutlinedIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <TabPanel value='1'>Я исполнитель</TabPanel>
        <TabPanel value='2'>Выполненные</TabPanel>
        <TabPanel value='3'>Просроченные</TabPanel>
        <TabPanel value='4'>Все</TabPanel>
      </TabContext>
    </Layout>
  );
};

export default Order;
