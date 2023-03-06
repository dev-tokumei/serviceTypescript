import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Autocomplete, Button, FormControl, TextField } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import FormGroup from '@mui/material/FormGroup';
import './registr.css';

export const Registr: React.FC = () => {
  const options = [
    { label: 'The Godfather', color: 'red' },
    { label: 'Pulp Fiction', color: 'green' },
  ];
  return (
    <>
      <Link to='/'>
        <Typography
          variant='h5'
          className='mobile'
          sx={{
            marginTop: '15px',
            marginLeft: '15px',
            fontWeight: 'bold',
            marginBottom: '15px',
          }}
        >
          SmartClient
        </Typography>
      </Link>
      <div className='flex items-center justify-center h-screen'>
        <Card
          sx={{
            backgroundColor: 'transparent',
            color: '#fff',
            width: '410px !important',
            margin: '0 20px',
          }}
        >
          <CardContent>
            <Typography
              variant='h5'
              sx={{ fontWeight: 'bold', marginBottom: '8px' }}
            >
              Регистрация
            </Typography>
            <Typography>Введите данные пользователя и компании</Typography>
            <FormGroup>
              <FormControl fullWidth>
                <TextField
                  sx={{
                    marginBottom: 2,
                    marginTop: 2,
                    label: { color: 'white' },
                  }}
                  label='Имя'
                  variant='outlined'
                />
              </FormControl>

              <FormControl fullWidth>
                <TextField
                  sx={{
                    marginBottom: 2,
                    label: { color: 'white' },
                  }}
                  label='Почта'
                  variant='outlined'
                />
              </FormControl>

              <span className='text-[#BDC0BF] text-[13px] '>
                Сюда мы вышлем код для входа в систему
              </span>
            </FormGroup>

            <FormGroup>
              <FormControl fullWidth>
                <TextField
                  sx={{
                    marginBottom: 2,
                    marginTop: 2,
                    label: { color: 'white' },
                  }}
                  label='Название компании'
                  variant='outlined'
                />
              </FormControl>

              <FormControl fullWidth>
                <TextField
                  sx={{
                    marginBottom: 2,
                    label: { color: 'white' },
                  }}
                  label='Адрес'
                  variant='outlined'
                />
              </FormControl>

              <FormControl fullWidth>
                <TextField
                  sx={{
                    marginBottom: 2,
                    label: { color: 'white' },
                  }}
                  label='Телефон'
                  variant='outlined'
                />
              </FormControl>

              <span className='text-[#BDC0BF] text-[13px] '>
                В международном формате, например, +992 502 ...
              </span>
            </FormGroup>
            <FormGroup>
              <FormControl>
                <Autocomplete
                  sx={{ pt: 3 }}
                  options={options}
                  renderInput={(params) => (
                    <TextField {...params} label='Тип бизнеса' sx={{}} />
                  )}
                />
              </FormControl>
            </FormGroup>

            <Button
              fullWidth
              startIcon={<ExitToAppIcon />}
              className='btnModal'
              sx={{
                color: '#222',
                marginTop: '20px',
                textTransform: 'capitalize',
                fontWeight: 'bold',
                borderRadius: 2,
              }}
              size='large'
            >
              Начнем
            </Button>
            <Typography fontSize={10} mt={4} mb={2} sx={{ width: '210px' }}>
              При регистрации Вы принимаете условия Пользовательского соглашения
            </Typography>
            <Link className='text-[#75FBBE]  hover:underline' to='/'>
              Уже есть аккаунт?
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
