import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, FormControl, TextField } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import './auth.css';

export const Auth: React.FC = () => {
  return (
    <>
      <Typography
        variant='h5'
        sx={{ marginTop: '15px', marginLeft: '15px', fontWeight: 'bold' }}
      >
        SmartClient
      </Typography>
      <div className='flex items-center justify-center h-screen'>
        <Card
          sx={{
            backgroundColor: 'transparent',
            color: '#fff',
            width: '450px !important',
            margin: '0 20px',
          }}
        >
          <CardContent>
            <Typography
              variant='h5'
              sx={{ fontWeight: 'bold', marginBottom: '8px' }}
            >
              Вход
            </Typography>
            <Typography>Введите почту для получения кода</Typography>
            <FormControl fullWidth>
              <TextField
                sx={{
                  marginTop: 4,
                  label: { color: 'white' },
                }}
                label='Почта'
                variant='outlined'
              />
              <Button
                startIcon={<MailIcon />}
                className='btnModal'
                sx={{ color: '#222', marginTop: '15px' }}
                size='large'
              >
                Отправить
              </Button>
            </FormControl>
            <Typography fontSize={10} mt={4} sx={{ width: '210px' }}>
              При входе в систему Вы принимаете условssия Пользовательского
              соглашения
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
