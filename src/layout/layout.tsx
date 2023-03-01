import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Sidebar } from '../components/sidebar/sidebar';
import BottomNavigation from '@mui/material/BottomNavigation/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction/BottomNavigationAction';
import AttachMoneyIcon from '@mui/icons-material/AttachMoneyOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MoveToInboxOutlinedIcon from '@mui/icons-material/MoveToInboxOutlined';
import ViewCompactOutlinedIcon from '@mui/icons-material/ViewCompactOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import './layou.css';
import { Navbar } from '../components/navbar/navbar';

interface ILayout {
  children: React.ReactNode;
}

export const Layout: React.FC<ILayout> = ({ children }) => {
  const [value, setValue] = useState<string>('recents');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div className='flex contentMain'>
      <div className='sideBar'>
        <Sidebar />
      </div>
      <main>
        <Navbar />
        {children}
      </main>
      <div className='bottomnavigation'>
        <BottomNavigation
          sx={{
            width: '100%',
            position: 'fixed',
            left: '0',
            right: '0',
            bottom: '0',
            backgroundColor: '#1F2824',
            overflowX: 'scroll',
          }}
          value={value}
          onChange={handleChange}
        >
          <BottomNavigationAction
            component={NavLink}
            to='/todo'
            sx={{ color: '#fff' }}
            label='Задачи'
            value='Задачи'
            icon={<CheckCircleOutlineOutlinedIcon />}
          />
          <BottomNavigationAction
            component={NavLink}
            to='/order'
            sx={{ color: '#fff' }}
            label='Заказы'
            value='Заказы'
            icon={<MoveToInboxOutlinedIcon />}
          />
          <BottomNavigationAction
            component={NavLink}
            to='/cashbox'
            sx={{ color: '#fff' }}
            label='Платежы'
            value='Платежы'
            icon={<AttachMoneyIcon />}
          />
          <BottomNavigationAction
            component={NavLink}
            to='/users'
            sx={{ color: '#fff' }}
            label='Клиенты'
            value='Клиенты'
            icon={<PeopleOutlineOutlinedIcon />}
          />
          <BottomNavigationAction
            component={NavLink}
            to='/inventory'
            sx={{ color: '#fff' }}
            label='Склад'
            value='Склад'
            icon={<ViewCompactOutlinedIcon />}
          />
          <BottomNavigationAction
            component={NavLink}
            to='/market'
            sx={{ color: '#fff' }}
            label='Магазин'
            value='Магазин'
            icon={<ShoppingCartOutlinedIcon />}
          />
          <BottomNavigationAction
            component={NavLink}
            to='/report'
            sx={{ color: '#fff' }}
            label='Отчети'
            value='Отчети'
            icon={<AssessmentOutlinedIcon />}
          />
          <BottomNavigationAction
            component={NavLink}
            to='/tender'
            sx={{ color: '#fff' }}
            label='Объявление'
            value='Объявление'
            icon={<WhatshotOutlinedIcon />}
          />
          <BottomNavigationAction
            component={NavLink}
            to='/settings'
            sx={{ color: '#fff' }}
            label='Настройка'
            value='Настройка'
            icon={<SettingsOutlinedIcon />}
          />
          <BottomNavigationAction
            component={NavLink}
            to='/help'
            sx={{ color: '#fff' }}
            label='Справка'
            value='Справка'
            icon={<HelpOutlineOutlinedIcon />}
          />
        </BottomNavigation>
      </div>
    </div>
  );
};
