import React, { useState } from 'react';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import imgdialog from '../../assets/navbar/empty.jpg';
import CloseIcon from '@mui/icons-material/Close';
import './navbar.css';

interface Inavbar {
  children?: React.ReactNode;
}

export const Navbar: React.FC<Inavbar> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const openBtn = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseBtn = () => {
    setAnchorEl(null);
  };
  return (
    <div className='flex justify-between items-center w-[100%] py-3'>
      <p>{children}</p>
      <div className='flex items-center'>
        <Tooltip title='Уведомления'>
          <IconButton onClick={handleClickOpen} sx={{ color: '#fff' }}>
            <NotificationsActiveOutlinedIcon className='iconAnimation' />
          </IconButton>
        </Tooltip>
        <Dialog maxWidth='xs' fullWidth open={open} onClose={handleClose}>
          <DialogContent sx={{ color: '#fff' }}>
            <DialogTitle>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Typography>Уведомление</Typography>
                <Tooltip title='Закрить'>
                  <IconButton sx={{ color: '#fff' }} onClick={handleClose}>
                    <CloseIcon />
                  </IconButton>
                </Tooltip>
              </Box>
              <img src={imgdialog} alt='Img' />
              <Typography>
                С включенными уведомлениями вы всегда будете в курсе дел 💌
              </Typography>
              <Button
                size='large'
                fullWidth
                className='btnmodal bg-gradient-to-r from-teal-300 to-teal-500 font-bold '
                style={{
                  color: 'black',
                  fontWeight: 'normal',
                  borderRadius: 10,
                  textTransform: 'capitalize',
                  marginTop: 15,
                }}
                variant='contained'
              >
                Включить уведомления
              </Button>
            </DialogTitle>
          </DialogContent>
        </Dialog>
        <Button
          aria-controls={openBtn ? 'demo-positioned-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={openBtn ? 'true' : undefined}
          onClick={handleClick}
        >
          Войти
        </Button>
        <Menu
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
        >
          <MenuItem sx={{ color: '#fff' }} onClick={handleCloseBtn}>
            Profile
          </MenuItem>
          <MenuItem sx={{ color: '#fff' }} onClick={handleCloseBtn}>
            My account
          </MenuItem>
          <Link to='/'>
            <MenuItem sx={{ color: '#fff' }} onClick={handleCloseBtn}>
              Выйти
            </MenuItem>
          </Link>
        </Menu>
      </div>
    </div>
  );
};
