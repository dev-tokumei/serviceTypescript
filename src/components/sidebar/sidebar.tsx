import { NavLink } from 'react-router-dom';
import { IconButton, Tooltip } from '@mui/material';
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
import Button from '@mui/material/Button';
import logo from '../../assets/logo.png';

export const Sidebar: React.FC = () => {
  return (
    <div className='bg-[#1F2824] flex flex-col h-screen '>
      <NavLink to='/'>
        <div className='w-[55px] h-[55px] bg-[#39413D] m-1 rounded-md'>
          <img className='w-full h-full' src={logo} alt='logo' />
        </div>
      </NavLink>
      <NavLink to='/todo'>
        <Tooltip title='Задачи' placement='right-end'>
          <Button sx={{ color: '#fff', padding: '20px' }}>
            <CheckCircleOutlineOutlinedIcon />
          </Button>
        </Tooltip>
      </NavLink>
      <NavLink to='/order'>
        <Tooltip title='Заказы' placement='right-end'>
          <Button sx={{ color: '#fff', padding: '20px' }}>
            <MoveToInboxOutlinedIcon />
          </Button>
        </Tooltip>
      </NavLink>
      <NavLink to='/cashbox'>
        <Tooltip title='Платежы' placement='right-end'>
          <Button sx={{ color: '#fff', padding: '20px' }}>
            <AttachMoneyIcon />
          </Button>
        </Tooltip>
      </NavLink>
      <NavLink to='/users'>
        <Tooltip title='Клиенты' placement='right-end'>
          <Button sx={{ color: '#fff', padding: '20px' }}>
            <PeopleOutlineOutlinedIcon />
          </Button>
        </Tooltip>
      </NavLink>
      <NavLink to='/inventory'>
        <Tooltip title='Склад' placement='right-end'>
          <Button sx={{ color: '#fff', padding: '20px' }}>
            <ViewCompactOutlinedIcon />
          </Button>
        </Tooltip>
      </NavLink>
      <NavLink to='/market'>
        <Tooltip title='Магазин' placement='right-end'>
          <Button sx={{ color: 'white', padding: '20px' }}>
            <ShoppingCartOutlinedIcon />
          </Button>
        </Tooltip>
      </NavLink>
      <NavLink to='/report'>
        <Tooltip title='Отчети' placement='right-end'>
          <Button sx={{ color: 'white', padding: '20px' }}>
            <AssessmentOutlinedIcon />
          </Button>
        </Tooltip>
      </NavLink>
      <NavLink to='/tender'>
        <Tooltip title='Объявление' placement='right-end'>
          <Button sx={{ color: 'white', padding: '20px' }}>
            <WhatshotOutlinedIcon />
          </Button>
        </Tooltip>
      </NavLink>
      <NavLink to='/setting'>
        <Tooltip title='Настройка' placement='right-end'>
          <IconButton sx={{ color: 'white', padding: '20px' }}>
            <SettingsOutlinedIcon />
          </IconButton>
        </Tooltip>
      </NavLink>
      <NavLink to='/help'>
        <Tooltip title='Справка' placement='right-end'>
          <Button sx={{ color: 'white', padding: '20px' }}>
            <HelpOutlineOutlinedIcon />
          </Button>
        </Tooltip>
      </NavLink>
    </div>
  );
};
