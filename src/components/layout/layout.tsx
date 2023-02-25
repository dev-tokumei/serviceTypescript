import BottomNavigation from '@mui/material/BottomNavigation/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction/BottomNavigationAction';
import { Sidebar } from '../sidebar/sidebar';
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
import { NavLink } from 'react-router-dom';
import './layou.css';
import React, { useState } from 'react';

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
      <main>{children}</main>
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
            sx={{ color: '#fff' }}
            label='Задачи'
            value='Задачи'
            icon={<CheckCircleOutlineOutlinedIcon />}
          />
          <BottomNavigationAction
            sx={{ color: '#fff' }}
            label='Заказы'
            value='Заказы'
            icon={<MoveToInboxOutlinedIcon />}
          />
          <BottomNavigationAction
            sx={{ color: '#fff' }}
            label='Платежы'
            value='Платежы'
            icon={<AttachMoneyIcon />}
          />
          <BottomNavigationAction
            sx={{ color: '#fff' }}
            label='Клиенты'
            value='Клиенты'
            icon={<PeopleOutlineOutlinedIcon />}
          />
          <BottomNavigationAction
            sx={{ color: '#fff' }}
            label='Склад'
            value='Склад'
            icon={<ViewCompactOutlinedIcon />}
          />
          <BottomNavigationAction
            sx={{ color: '#fff' }}
            label='Магазин'
            value='Магазин'
            icon={<ShoppingCartOutlinedIcon />}
          />
          <BottomNavigationAction
            sx={{ color: '#fff' }}
            label='Отчети'
            value='Отчети'
            icon={<AssessmentOutlinedIcon />}
          />
          <BottomNavigationAction
            sx={{ color: '#fff' }}
            label='Объявление'
            value='Объявление'
            icon={<WhatshotOutlinedIcon />}
          />
          <BottomNavigationAction
            sx={{ color: '#fff' }}
            label='Настройка'
            value='Настройка'
            icon={<SettingsOutlinedIcon />}
          />
          <BottomNavigationAction
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
