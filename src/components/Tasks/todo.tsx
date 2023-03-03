import React, { useState } from 'react';
import {
  alpha,
  Box,
  InputAdornment,
  InputBase,
  TextField,
} from '@mui/material';
import { Layout } from '../../layout/layout';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import SearchIcon from '@mui/icons-material/Search';
import './todo.css';

const Todo: React.FC = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Layout>
      <TabContext value={value}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            height: '52px',
          }}
        >
          <TabList
            variant='scrollable'
            scrollButtons='auto'
            sx={{ color: '#fff' }}
            onChange={handleChange}
            aria-label='lab API tabs example'
          >
            <Tab
              sx={{ color: '#fff', textTransform: 'inherit' }}
              label='Я исполнитель'
              value='1'
            />
            <Tab
              sx={{ color: '#fff', textTransform: 'inherit' }}
              label='Выполненные'
              value='2'
            />
            <Tab
              sx={{ color: '#fff', textTransform: 'inherit' }}
              label='Просроченные'
              value='3'
            />
            <Tab
              sx={{ color: '#fff', textTransform: 'inherit' }}
              label='Все'
              value='4'
            />
            <Tab
              sx={{ color: '#fff', textTransform: 'inherit' }}
              label='Все'
              value='5'
            />
            <Tab
              sx={{ color: '#fff', textTransform: 'inherit' }}
              label='Все'
              value='6'
            />
          </TabList>
          <TextField
            placeholder='Поиск'
            sx={{
              width: '960px',
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
        </Box>
        <TabPanel sx={{}} value='1'>
          Я исполнитель
        </TabPanel>
        <TabPanel value='2'>Выполненные</TabPanel>
        <TabPanel value='3'>Просроченные</TabPanel>
        <TabPanel value='4'>Все</TabPanel>
      </TabContext>
    </Layout>
  );
};

export default Todo;
