import React, { useState } from 'react';
import { Box } from '@mui/material';
import { Layout } from '../../layout/layout';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import './todo.css';

const Todo: React.FC = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Layout>
      <TabContext value={value}>
        <Box sx={{ width: '100%' }}>
          <TabList
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
          </TabList>
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
