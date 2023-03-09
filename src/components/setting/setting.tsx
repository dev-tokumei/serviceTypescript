import React from 'react';
import { Box, Typography } from '@mui/material';
import { Layout } from '../../layout/layout';
import { Navbar } from '../navbar/navbar';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import DeviceHubOutlinedIcon from '@mui/icons-material/DeviceHubOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MoveToInboxOutlinedIcon from '@mui/icons-material/MoveToInboxOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import UpcomingOutlinedIcon from '@mui/icons-material/UpcomingOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import './setting.css';

const Setting = () => {
  return (
    <Layout>
      <Navbar>Настройка</Navbar>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          maxWidth: '740px',
          margin: '0 auto',
        }}
      >
        <Box sx={{ width: '354px', height: '397px', mb: 15 }}>
          <Typography variant='h6'>Компания</Typography>
          <List sx={{ borderBottom: 1, borderColor: '#2F3833' }}>
            <ListItemButton>
              <ListItemIcon sx={{ color: '#fff' }}>
                <AssignmentTurnedInOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary='Общее' />
            </ListItemButton>
          </List>
          <List sx={{ borderBottom: 1, borderColor: '#2F3833' }}>
            <ListItemButton>
              <ListItemIcon sx={{ color: '#fff' }}>
                <FmdGoodOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary='Локация' />
            </ListItemButton>
          </List>
          <List sx={{ borderBottom: 1, borderColor: '#2F3833' }}>
            <ListItemButton>
              <ListItemIcon sx={{ color: '#fff' }}>
                <GroupOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary='Cотрудики' />
            </ListItemButton>
          </List>
          <List sx={{ borderBottom: 1, borderColor: '#2F3833' }}>
            <ListItemButton>
              <ListItemIcon sx={{ color: '#fff' }}>
                <PersonOutlineOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary='Ваш профиль' />
            </ListItemButton>
          </List>
          <List sx={{ borderBottom: 1, borderColor: '#2F3833' }}>
            <ListItemButton>
              <ListItemIcon sx={{ color: '#fff' }}>
                <InsertDriveFileOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary='Документы' />
            </ListItemButton>
          </List>
          <List sx={{ borderBottom: 1, borderColor: '#2F3833' }}>
            <ListItemButton>
              <ListItemIcon sx={{ color: '#fff' }}>
                <DeviceHubOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary='Интеграции' />
            </ListItemButton>
          </List>
          <List sx={{ borderBottom: 1, borderColor: '#2F3833' }}>
            <ListItemButton>
              <ListItemIcon sx={{ color: '#fff' }}>
                <ShoppingCartOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary='Лицензия' />
            </ListItemButton>
          </List>
        </Box>
        <Box sx={{ width: '354px', height: '397px' }}>
          <Typography variant='h6'>Заказы</Typography>
          <List sx={{ borderBottom: 1, borderColor: '#2F3833' }}>
            <ListItemButton>
              <ListItemIcon sx={{ color: '#fff' }}>
                <MoveToInboxOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary='Общее' />
            </ListItemButton>
          </List>
          <List sx={{ borderBottom: 1, borderColor: '#2F3833' }}>
            <ListItemButton>
              <ListItemIcon sx={{ color: '#fff' }}>
                <SmsOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary='СМС уведомления' />
            </ListItemButton>
          </List>
          <List sx={{ borderBottom: 1, borderColor: '#2F3833' }}>
            <ListItemButton>
              <ListItemIcon sx={{ color: '#fff' }}>
                <FormatListBulletedOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary='Cтатусы' />
            </ListItemButton>
          </List>
          <List sx={{ borderBottom: 1, borderColor: '#2F3833' }}>
            <ListItemButton>
              <ListItemIcon sx={{ color: '#fff' }}>
                <BuildOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary='Услуги' />
            </ListItemButton>
          </List>
        </Box>
        <Box sx={{ width: '354px', height: '153px' }}>
          <Typography variant='h6'>Клиенты</Typography>
          <List sx={{ borderBottom: 1, borderColor: '#2F3833' }}>
            <ListItemButton>
              <ListItemIcon sx={{ color: '#fff' }}>
                <UpcomingOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary='Уведомления' />
            </ListItemButton>
          </List>
        </Box>
        <Box sx={{ width: '354px', height: '153px', mb: 5 }}>
          <Typography variant='h6'>Платежи</Typography>
          <List sx={{ borderBottom: 1, borderColor: '#2F3833', width: '100%' }}>
            <ListItemButton>
              <ListItemIcon sx={{ color: '#fff' }}>
                <MonetizationOnOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary='Статьи движения денежных средств' />
            </ListItemButton>
          </List>
          <List sx={{ borderBottom: 1, borderColor: '#2F3833' }}>
            <ListItemButton>
              <ListItemIcon sx={{ color: '#fff' }}>
                <CreditCardOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary='Методы оплаты' />
            </ListItemButton>
          </List>
        </Box>
        <Box sx={{ width: '354px', height: '397px' }}>
          <Typography variant='h6'>Формы</Typography>
          <List sx={{ borderBottom: 1, borderColor: '#2F3833' }}>
            <ListItemButton>
              <ListItemIcon sx={{ color: '#fff' }}>
                <MoveToInboxOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary='Типы заказа' />
            </ListItemButton>
          </List>
          <List sx={{ borderBottom: 1, borderColor: '#2F3833' }}>
            <ListItemButton>
              <ListItemIcon sx={{ color: '#fff' }}>
                <FormatListBulletedOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary='Поля заказа' />
            </ListItemButton>
          </List>
          <List sx={{ borderBottom: 1, borderColor: '#2F3833' }}>
            <ListItemButton>
              <ListItemIcon sx={{ color: '#fff' }}>
                <GroupOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary='Типы клиента' />
            </ListItemButton>
          </List>
          <List sx={{ borderBottom: 1, borderColor: '#2F3833' }}>
            <ListItemButton>
              <ListItemIcon sx={{ color: '#fff' }}>
                <FormatListBulletedOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary='Поля заказа' />
            </ListItemButton>
          </List>
          <List sx={{ borderBottom: 1, borderColor: '#2F3833' }}>
            <ListItemButton>
              <ListItemIcon sx={{ color: '#fff' }}>
                <BookOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary='Спарвочник' />
            </ListItemButton>
          </List>
        </Box>
        <Box sx={{ width: '354px', height: '397px' }}></Box>
      </Box>
    </Layout>
  );
};

export default Setting;
